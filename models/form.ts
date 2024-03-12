class Form {
  id: number;
  name: string;
  label: string;
  index: number;
  type: string;
  required: boolean;
  uuid: string;
  created_at: string;
  updated_at: string;
  parent_form: number;
  created_by: number;
  updated_by: number;

  constructor({
    id,
    name,
    label,
    index,
    type,
    required,
    uuid,
    created_at,
    updated_at,
    parent_form,
    created_by,
    updated_by,
  }: Form) {
    this.id = id;
    this.name = name;
    this.label = label;
    this.index = index;
    this.type = type;
    this.required = required;
    this.uuid = uuid;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.parent_form = parent_form;
    this.created_by = created_by;
    this.updated_by = updated_by;
  }
}