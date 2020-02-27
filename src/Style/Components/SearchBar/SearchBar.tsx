import React, { useEffect, useState } from 'react';
import { StyledSearchBar, StyledSearchBarTextInput } from './SearchBar.Styled';

interface SearchBarProps {
    active: boolean;
    setActive: (value: boolean) => void;
}

function SearchBar({ active, setActive }: SearchBarProps) {
    const [inputField, setInputField] = useState<HTMLInputElement>();

    const escapeListener = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setActive(false);
        }
    };

    useEffect(() => {
        if (active) inputField?.focus();
    }, [inputField, active]);

    useEffect(() => {
        document.addEventListener('keydown', escapeListener);
        return () => document.removeEventListener('keydown', escapeListener);
    });

    const submit = () => {
        console.log(inputField?.value);
    };

    return (
        <>
            <StyledSearchBar
                active={active}
                onClick={() => setActive(true)}
                // onMouseEnter={() => setActive(true)}
                // onMouseLeave={() => setActive(false)}
            ></StyledSearchBar>
            {active && (
                <StyledSearchBarTextInput
                    ref={(input) => setInputField(input!)}
                    placeholder="Search..."
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            setActive(false);
                            submit();
                        }

                        if (event.key === 'Escape') {
                            setActive(false);
                        }
                    }}
                />
            )}
        </>
    );
}

export default SearchBar;
