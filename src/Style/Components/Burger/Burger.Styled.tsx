import styled from 'styled-components';
import { AnimationDurTFn } from '../../utils';

interface StyledBurgerProps {
    toggled: boolean;
    hidden: boolean;
}

export const StyledBurger = styled.button<StyledBurgerProps>`
    /* position: absolute; */
    /* top: 5%; */
    /* left: 2rem; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    margin-left: ${({ hidden }) => (hidden ? '-5rem' : '0')};
    opacity: ${({ hidden }) => hidden ? '0' : '1'};
    transition: opacity ${({ theme, hidden }) => AnimationDurTFn(theme, !hidden)};

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: ${({ theme }) => theme.colors.onPrimary};
        /* (toggled ? theme.colors.onSurface :  */
        border-radius: 10px;
        transition: all 0.3s linear;
        transition-property: opacity, transform;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ toggled }) => (toggled ? 'rotate(45deg)' : 'rotate(0)')};
        }

        :nth-child(2) {
            opacity: ${({ toggled }) => (toggled ? '0' : '1')};
            transform: ${({ toggled }) => (toggled ? 'translateX(20px)' : 'translateX(0)')};
        }

        :nth-child(3) {
            transform: ${({ toggled }) => (toggled ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`;
