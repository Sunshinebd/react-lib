import React from "react";
import {TextField,} from "@material-ui/core";

export default function TextInput(items){
    // console.log(items.value)
    return (
        <TextField
            id={items.oneItem.id}
            type={items.oneItem.type}
            error={items.oneItem.error}
            size={items.size}
            value={items.value}
            onChange={items.onChange}
            variant={"outlined"}
            disabled={items.oneItem.disabled}
            margin={items.margin}
            defaultValue={items.oneItem.defaultValue}
            placeholder={items.oneItem.placeholder}
            helperText={items.oneItem.helperText}
            InputProps={items.oneItem.inputProps}
        />
    )
}