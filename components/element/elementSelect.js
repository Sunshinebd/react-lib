import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

export default function SelectInput(items){

    return (
        <FormControl variant="outlined" error={items.oneItem.error} margin="normal">
            <InputLabel>{items.oneItem.helperText}</InputLabel>
            <Select
                style={items.oneItem.style}
                id={items.oneItem.id}
                value={items.value}
                onChange={items.onChange}
            >
                {/*  设置  */}
                {items.oneItem.option.map((option,index) => (
                    <MenuItem id={index+items.oneItem.id+"menu"}
                              key={items.oneItem.id+index+"key"}
                              value={option.id?option.id:index+1}
                              onClick={items.onClick}>{option.name?option.name:option}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}