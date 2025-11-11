export function formValidation() {
  return {
    validateTitle(title) {
      if (!title || title.trim() === "") {
        return {
          field: "title",
          isValid: false,
          message: "Title cannot be empty",
        };
      }
      return {
        field: "title",
        isValid: true,
        message: "",
      };
    },

    validateDetails(details) {
      if (!details || details.trim() === "") {
        return {
          field: "details",
          isValid: false,
          message: "Details cannot be empty",
        };
      }
      return {
        field: "details",
        isValid: true,
        message: "",
      };
    },

    validateDates(startDate, dueDate) {
      if (!startDate || !dueDate) {
        return {
          field: "dates",
          isValid: false,
          message: "Both dates must be selected",
        };
      }
      if (new Date(startDate) > new Date(dueDate)) {
        return {
          field: "dates",
          isValid: false,
          message: "Start date cannot be after due date.",
        };
      }
      return {
        field: "dates",
        isValid: true,
        message: "",
      };
    },

    isFormValid({ title, details, startDate, dueDate }) {
      const titleCheck = this.validateTitle(title);
      const detailsCheck = this.validateDetails(details);
      const datesCheck = this.validateDates(startDate, dueDate);

      const errors = [titleCheck, detailsCheck, datesCheck] //Array of objects with keys isValid and message
        .filter((check) => !check.isValid); //filters those with isValid: false

      return {
        isValid: errors.length === 0,
        errors: errors.map(({ field, message }) => ({ field, message })),
      };
    },
  };
}
