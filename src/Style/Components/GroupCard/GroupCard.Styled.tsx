import styled from 'styled-components';
import { BoxShadowHoverFragment, BoxShadowHoverFragmentProps } from '../../CommonEffects.Styled';
import { CreateStyledTextSnippet } from '../../Text.Styled';

interface StyledGroupCardProps {
    expanded: boolean;
}

export const StyledGroupCard = styled.div<StyledGroupCardProps & BoxShadowHoverFragmentProps>`
    ${BoxShadowHoverFragment}

    border-radius: 2px;
    border: none;

    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.onSurface};
    
    /* margin: ${({ theme }) => theme.colors.onSurface}; */
    
    position: relative;
    width: 100%;
    
    &::before,
    &::after {
        border-radius: 2px;
        border: none;
    }
`;

/* display: flex;
    justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};
    align-items: ${({ alignItems }) => alignItems ?? 'center'};
    flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
    flex: ${({ flex }) => flex ?? 'none'};
    flex-wrap: ${({ flexWrap }) => flexWrap ?? 'nowrap'}; */

export const StyledTitleBar = styled.div`
    /* padding:  */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
`;

export const StyledGroupCardTopAppBar = styled.div`
    /* padding:  */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 1rem 2rem;
`;

interface StyledTabListContainerProps {
    expanded: boolean;
}

export const StyledTabListContainer = styled.div<StyledTabListContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    /* // TODO: @Max, figure out these fucking transitions */
    /* max-height: ${({ expanded }) => (expanded ? '999px' : '0px')};
    opacity: ${({ expanded }) => (expanded ? '1' : '0')};
    transition: max-height
        ${({
            theme: {
                animation: { inSpeed, inTimingFn },
            },
        }) => '5s'.concat(' ', inTimingFn)};
        AnimationDurTFn(HRDRRDHDJD)
    transition-property: max-height, opacity; */
`;

interface OptionsContainer {
    shown: boolean;
}

export const OptionsContainer = styled.div<OptionsContainer>`
    width: 100%;
    height: 2rem;
    padding: 0 1rem;

    display: ${({ shown }) => (shown ? 'flex' : 'none')};
    justify-content: space-evenly;
    align-items: center;
`;

export const GroupActionButton = styled.div`
    height: 1rem;
    width: 1rem;
    margin: 0.5rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: ${({ theme }) => theme.colors.unfocusedLight};
    }

    &::after {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

export const TagsInput = styled.input`
    flex-grow: 1;
    height: 100%;
    outline: none;
    border-width: 0 1px 0 1px;
    border-color: ${({ theme }) => theme.colors.unfocused};
    border-style: solid;
    color: ${({ theme }) => theme.colors.onSurface};
    padding: 0.5rem 0;

    ${({ theme }) => CreateStyledTextSnippet(theme.text.Body1)};
`;

interface PillTagProps {
    pillColor: string;
}

export const PillTag = styled.div<PillTagProps>`
    border-radius: 50vmin;
    height: 1.5rem;
    padding: 0.5rem 0;
    margin: 0.1rem 0;
    background-color: ${({ pillColor }) => pillColor};
    color: black;

    display: flex;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;

    ${({ theme }) => CreateStyledTextSnippet(theme.text.Body1)}

    overflow: scroll;

    /* &::before {

    } */
`;