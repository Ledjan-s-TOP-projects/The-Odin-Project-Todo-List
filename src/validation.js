export function formValidation() {
  return {
    validateTitle(title) {
      if (!title || title.trim() === "") {
        return {
          isValid: false,
          message: "Title cannot be empty",
        };
      }
      return {
        isValid: true,
        message: "",
      };
    },

    validateDetails(details) {
      if (!details || details.trim() === "") {
        return {
          isValid: false,
          message: "Details cannot be empty",
        };
      }
      return {
        isValid: true,
        message: "",
      };
    },

    validateDates(startDate, endDate) {
      if (!startDate || !endDate) {
        return {
          isValid: false,
          message: "Both dates must be selected",
        };
      }
      if (new Date(startDate) > new Date(endDate)) {
        return {
          isValid: false,
          message: "Start date cannot be after end date.",
        };
      }
      return {
        isValid: true,
        message: "",
      };
    },

    isFormValid({ title, details, startDate, endDate }) {
      const titleCheck = this.validateTitle(title);
      const detailsCheck = this.validateDetails(details);
      const datesCheck = this.validateDates(startDate, endDate);

      const errors = [titleCheck, detailsCheck, datesCheck] //Array of objects with keys isValid and message
        .filter((check) => !check.isValid) //filters those with isValid: false
        .map((check) => check.message); //map creates a new array containing just the error messages

      return {
        isValid: errors.length === 0,
        messages: errors,
      };
    },
  };
}
