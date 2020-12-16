import { useCallback, useState } from 'react'

export const useInput = (initialValue = '') => {
    const [value, setValue] = useState(initialValue)

    const onChange = useCallback(event => {
        setValue(event.target.value)
    }, [])

    return {
        value,
        onChange
    }
}