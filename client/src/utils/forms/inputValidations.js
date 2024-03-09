export const nameValidation = {
  name: "name",
  label: "name",
  type: "text",
  id: "name",
  placeholder: "ex: John Smith",
  validation: {
    required: {
      value: true,
      message: "This field is required.",
    },
    maxLength: {
      value: 50,
      message: "Maximum 50 characters.",
    },
  },
};
