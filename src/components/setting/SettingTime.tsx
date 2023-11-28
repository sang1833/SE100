interface Props {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (value: any) => void;
}

const SettingTime = ({ value, onChange }: Props) => {
  return (
    <div className="block">
      <input
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full max-w-xs"
      />
    </div>
  );
};

export default SettingTime;
