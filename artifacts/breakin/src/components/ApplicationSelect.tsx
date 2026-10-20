import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = { value: string; label: string; description?: string };
type Group = { label: string; options: Option[] };

export default function ApplicationSelect({
  id,
  name,
  placeholder,
  defaultValue,
  required,
  options,
  groups,
}: {
  id: string;
  name: string;
  placeholder: string;
  defaultValue?: string;
  required?: boolean;
  options?: Option[];
  groups?: Group[];
}) {
  return (
    <Select name={name} defaultValue={defaultValue || undefined} required={required}>
      <SelectTrigger id={id} className="application-select-trigger">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="application-select-content" position="popper" sideOffset={5}>
        {options?.map((option) => (
          <SelectItem className="application-select-item" key={option.value} value={option.value} description={option.description}>
            {option.label}
          </SelectItem>
        ))}
        {groups?.map((group) => (
          <SelectGroup key={group.label}>
            <SelectLabel className="application-select-label">{group.label}</SelectLabel>
            {group.options.map((option) => (
              <SelectItem className="application-select-item" key={option.value} value={option.value} description={option.description}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
