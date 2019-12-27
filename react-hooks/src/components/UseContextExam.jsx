import React, { createContext, useContext } from 'react'

export const UseContextExam = () => {
    const themes = {
        light: {
            foreground: '#000000',
            background: '#eeeeee'
        },
        dark: {
            foreground: '#ffffff',
            background: '#222222'
        }
    }
    // createContext를 이용하면 원하는 값을 일일이 트리를 통과하지 않고도 원하는 값을 트리 깊숙히 보낼수 있습니다.
    const themeContext = createContext(themes.light)
    // 이젠 중간에 있는 컴포넌트가 일일이 테마를 넘겨줄 필요가 없습니다.
    const Toolbar = props => {
        return (
            <div>
                <ThemeButton />
            </div>
        )
    }
    const ThemeButton = () => {
        const theme = useContext(themeContext)

        // 현재 선택된 테마값을 사용한다.
        return (
            <button
                style={{
                    background: theme.background,
                    color: theme.foreground
                }}
            >
                theme context
            </button>
        )
    }

    // Provider를 이용해 하위트리에 테마값을 보내줍니다. 아무리 깊숙히 있어도 모든 컴포넌트가 이 값을 읽을 수 있습니다.
    return (
        <themeContext.Provider value={themes.dark}>
            <Toolbar />
        </themeContext.Provider>
    )
}
