export interface FieldWorkTypes {
  label: string;
  value: string;
  name: string;
  farmId?: string;
}

export function createFieldWorkType(
  id: number,
  label: string,
  value: string,
  name: string,
  farmId?: string,
): FieldWorkTypes {
  return {
    label,
    value,
    name,
    farmId,
  };
}
