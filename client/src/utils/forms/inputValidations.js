export const nameValidation = {
  name: "name",
  label: "name",
  type: "text",
  id: "name",
  placeholder: "ex: John Smith",
  validation: {
    required: {
      value: true,
      message: "Name is required.",
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
      message: "Email is required.",
    },
    pattern: {
      value:
        /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
      message: "Invalid email.",
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
  type: "tel",
  id: "phoneNumber",
  placeholder: "ex: +12221231234",
  validation: {
    required: {
      value: true,
      message: "Phone number is required.",
    },
    pattern: {
      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      message: "Invalid phone number.",
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
      message: "Message is required.",
    },
    maxLength: {
      value: 5000,
      message: "Maximum 5000 characters.",
    },
  },
};
