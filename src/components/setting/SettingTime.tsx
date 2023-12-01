interface Props {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (value: any) => void;
  disabled?: boolean;
}

const SettingTime = ({ value, onChange, disabled }: Props) => {
  return (
    <div className="block">
      <input
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full max-w-xs"
        disabled={disabled}
      />
    </div>
  );
};

export default SettingTime;
