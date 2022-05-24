import { TextField } from "@mui/material";

interface Props {
  id: string;
  label: string;
  type: string;
  onChange: React.ChangeEventHandler;
  value: unknown;
  error: boolean | undefined;
}

const EditForm: React.FC<Props> = ({
  id,
  label,
  type,
  onChange,
  value,
  error,
}) => {
  return (
    <TextField
      sx={{
        marginBottom: " !important",
        marginTop: "0 !important",
      }}
      id={id}
      label={label}
      variant="standard"
      type={type}
      onChange={onChange}
      value={value}
      error={error}
    />
  );
};

export default EditForm;
