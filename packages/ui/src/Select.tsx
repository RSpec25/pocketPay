"use client"
export const Select = ({ options, onSelect }:
    {
        onSelect: (val: string) => void,
        options:
        {   
            vd: number,
            key: string,
            value: string
        }[]
    }) => {
        console.log("inside select card");
        
    return <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={(e) => onSelect(e.target.value)} >
        {options.map(option => <option  key={option.vd} value={option.key}>{option.value}</option>)}
    </select>
}