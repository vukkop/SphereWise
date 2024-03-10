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

export const emailValidation = {
  name: "email",
  label: "email",
  type: "email",
  id: "email",
  placeholder: "ex: example@email.com",
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

export const phoneValidation = {
  name: "phoneNumber",
  label: "phone number",
  type: "text",
  id: "phoneNumber",
  placeholder: "ex: +1 123 123 1234",
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

export const messageValidation = {
  name: "message",
  label: "message",
  type: "text",
  id: "message",
  placeholder: "Please write your message here",
  multiline: true,
  validation: {
    required: {
      value: true,
      message: "This field is required.",
    },
  },
};
