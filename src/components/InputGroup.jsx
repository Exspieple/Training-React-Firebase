import { TextField } from "@mui/material";

function InputGroup({ name, type = "text", ...props }) {
  return (
    <div className="c-inputGroup">

      <TextField
        variant="standard"
        label={name}
        type={type}
        name={name}
        id={name}
        {...props}
      />
    </div>
  );
}

export default InputGroup;
