/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/extended/js/custom/authentication/password-reset/new-password.js":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/extended/js/custom/authentication/password-reset/new-password.js ***!
  \*******************************************************************************************/
/***/ (() => {

eval(" // Class Definition\n\nvar KTPasswordResetNewPassword = function () {\n  // Elements\n  var form;\n  var submitButton;\n  var validator;\n  var passwordMeter;\n\n  var handleForm = function handleForm(e) {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validator = FormValidation.formValidation(form, {\n      fields: {\n        'password': {\n          validators: {\n            notEmpty: {\n              message: 'Поле пароль является обязательным для заполнения'\n            },\n            callback: {\n              message: 'Введите правильный пароль',\n              callback: function callback(input) {\n                if (input.value.length > 0) {\n                  return validatePassword();\n                }\n              }\n            }\n          }\n        },\n        'confirm-password': {\n          validators: {\n            notEmpty: {\n              message: 'Требуется подтверждение пароля'\n            },\n            identical: {\n              compare: function compare() {\n                return form.querySelector('[name=\"password\"]').value;\n              },\n              message: 'The password and its confirm are not the same'\n            }\n          }\n        },\n        'toc': {\n          validators: {\n            notEmpty: {\n              message: 'Подтверждение политики обработки обязательно'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger({\n          event: {\n            password: false\n          }\n        }),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    });\n    submitButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      validator.revalidateField('password');\n      validator.validate().then(function (status) {\n        if (status == 'Valid') {\n          // Show loading indication\n          submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click\n\n          submitButton.disabled = true; // Simulate ajax request\n\n          axios.post(submitButton.closest('form').getAttribute('action'), new FormData(form)).then(function (response) {\n            // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n            Swal.fire({\n              text: \"Вы успешно сменили пароль\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"OK\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            }).then(function (result) {\n              if (result.isConfirmed) {\n                window.location.href = '/login';\n                form.querySelector('[name=\"email\"]').value = \"\";\n                form.querySelector('[name=\"password\"]').value = \"\";\n                form.querySelector('[name=\"confirm-password\"]').value = \"\";\n                passwordMeter.reset(); // reset password meter\n              }\n            });\n          })[\"catch\"](function (error) {\n            var dataMessage = error.response.data.message;\n            var dataErrors = error.response.data.errors;\n\n            for (var errorsKey in dataErrors) {\n              if (!dataErrors.hasOwnProperty(errorsKey)) continue;\n              dataMessage += \"\\r\\n\" + dataErrors[errorsKey];\n            }\n\n            if (error.response) {\n              Swal.fire({\n                text: dataMessage,\n                icon: \"error\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              });\n            }\n          }).then(function () {\n            // always executed\n            // Hide loading indication\n            submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n            submitButton.disabled = false;\n          });\n        } else {\n          // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n          Swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    });\n    form.querySelector('input[name=\"password\"]').addEventListener('input', function () {\n      if (this.value.length > 0) {\n        validator.updateFieldStatus('password', 'NotValidated');\n      }\n    });\n  };\n\n  var validatePassword = function validatePassword() {\n    return passwordMeter.getScore() > 50;\n  }; // Public Functions\n\n\n  return {\n    // public functions\n    init: function init() {\n      form = document.querySelector('#kt_new_password_form');\n      submitButton = document.querySelector('#kt_new_password_submit');\n      passwordMeter = KTPasswordMeter.getInstance(form.querySelector('[data-kt-password-meter=\"true\"]'));\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTPasswordResetNewPassword.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2V4dGVuZGVkL2pzL2N1c3RvbS9hdXRoZW50aWNhdGlvbi9wYXNzd29yZC1yZXNldC9uZXctcGFzc3dvcmQuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsMEJBQTBCLEdBQUcsWUFBWTtBQUN6QztBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxZQUFKO0FBQ0EsTUFBSUMsU0FBSjtBQUNBLE1BQUlDLGFBQUo7O0FBRUEsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBVUMsQ0FBVixFQUFhO0FBQzFCO0FBQ0FILElBQUFBLFNBQVMsR0FBR0ksY0FBYyxDQUFDQyxjQUFmLENBQ1JQLElBRFEsRUFFUjtBQUNJUSxNQUFBQSxNQUFNLEVBQUU7QUFDSixvQkFBWTtBQUNSQyxVQUFBQSxVQUFVLEVBQUU7QUFDUkMsWUFBQUEsUUFBUSxFQUFFO0FBQ05DLGNBQUFBLE9BQU8sRUFBRTtBQURILGFBREY7QUFJUkMsWUFBQUEsUUFBUSxFQUFFO0FBQ05ELGNBQUFBLE9BQU8sRUFBRSwyQkFESDtBQUVOQyxjQUFBQSxRQUFRLEVBQUUsa0JBQVVDLEtBQVYsRUFBaUI7QUFDdkIsb0JBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQ3hCLHlCQUFPQyxnQkFBZ0IsRUFBdkI7QUFDSDtBQUNKO0FBTks7QUFKRjtBQURKLFNBRFI7QUFnQkosNEJBQW9CO0FBQ2hCUCxVQUFBQSxVQUFVLEVBQUU7QUFDUkMsWUFBQUEsUUFBUSxFQUFFO0FBQ05DLGNBQUFBLE9BQU8sRUFBRTtBQURILGFBREY7QUFJUk0sWUFBQUEsU0FBUyxFQUFFO0FBQ1BDLGNBQUFBLE9BQU8sRUFBRSxtQkFBWTtBQUNqQix1QkFBT2xCLElBQUksQ0FBQ21CLGFBQUwsQ0FBbUIsbUJBQW5CLEVBQXdDTCxLQUEvQztBQUNILGVBSE07QUFJUEgsY0FBQUEsT0FBTyxFQUFFO0FBSkY7QUFKSDtBQURJLFNBaEJoQjtB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QUFWLENBQTRCLFVBQTVCLEVBQXdDLGNBQXhDO0FBQ0g7QUFDSixLQUpEO0FBS0gsR0E3SUQ7O0FBK0lBLE1BQUlsRCxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQVk7QUFDL0IsV0FBUWIsYUFBYSxDQUFDZ0UsUUFBZCxLQUEyQixFQUFuQztBQUNILEdBRkQsQ0F0SnlDLENBMEp6Qzs7O0FBQ0EsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkcEUsTUFBQUEsSUFBSSxHQUFHcUUsUUFBUSxDQUFDbEQsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBUDtBQUNBbEIsTUFBQUEsWUFBWSxHQUFHb0UsUUFBUSxDQUFDbEQsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBZjtBQUNBaEIsTUFBQUEsYUFBYSxHQUFHbUUsZUFBZSxDQUFDQyxXQUFoQixDQUE0QnZFLElBQUksQ0FBQ21CLGFBQUwsQ0FBbUIsaUNBQW5CLENBQTVCLENBQWhCO0FBRUFmLE1BQUFBLFVBQVU7QUFDYjtBQVJFLEdBQVA7QUFVSCxDQXJLZ0MsRUFBakMsQyxDQXVLQTs7O0FBQ0FvRSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbEMxRSxFQUFBQSwwQkFBMEIsQ0FBQ3FFLElBQTNCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvZXh0ZW5kZWQvanMvY3VzdG9tL2F1dGhlbnRpY2F0aW9uL3Bhc3N3b3JkLXJlc2V0L25ldy1wYXNzd29yZC5qcz9kM2EzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBEZWZpbml0aW9uXG52YXIgS1RQYXNzd29yZFJlc2V0TmV3UGFzc3dvcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gRWxlbWVudHNcbiAgICB2YXIgZm9ybTtcbiAgICB2YXIgc3VibWl0QnV0dG9uO1xuICAgIHZhciB2YWxpZGF0b3I7XG4gICAgdmFyIHBhc3N3b3JkTWV0ZXI7XG5cbiAgICB2YXIgaGFuZGxlRm9ybSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIEluaXQgZm9ybSB2YWxpZGF0aW9uIHJ1bGVzLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBGb3JtVmFsaWRhdGlvbiBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOmh0dHBzOi8vZm9ybXZhbGlkYXRpb24uaW8vXG4gICAgICAgIHZhbGlkYXRvciA9IEZvcm1WYWxpZGF0aW9uLmZvcm1WYWxpZGF0aW9uKFxuICAgICAgICAgICAgZm9ybSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3Bhc3N3b3JkJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfQn9C+0LvQtSDQv9Cw0YDQvtC70Ywg0Y/QstC70Y/QtdGC0YHRjyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGL0Lwg0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ9CS0LLQtdC00LjRgtC1INC/0YDQsNCy0LjQu9GM0L3Ri9C5INC/0LDRgNC+0LvRjCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlUGFzc3dvcmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ2NvbmZpcm0tcGFzc3dvcmQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ9Ci0YDQtdCx0YPQtdGC0YHRjyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtSDQv9Cw0YDQvtC70Y8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZGVudGljYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJwYXNzd29yZFwiXScpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHBhc3N3b3JkIGFuZCBpdHMgY29uZmlybSBhcmUgbm90IHRoZSBzYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ3RvYyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn0J/QvtC00YLQstC10YDQttC00LXQvdC40LUg0L/QvtC70LjRgtC40LrQuCDQvtCx0YDQsNCx0L7RgtC60Lgg0L7QsdGP0LfQsNGC0LXQu9GM0L3QvidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgYm9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXA1KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdG9yOiAnLmZ2LXJvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVJbnZhbGlkQ2xhc3M6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlVmFsaWRDbGFzczogJydcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFsaWRhdG9yLnJldmFsaWRhdGVGaWVsZCgncGFzc3dvcmQnKTtcblxuICAgICAgICAgICAgdmFsaWRhdG9yLnZhbGlkYXRlKCkudGhlbihmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSAnVmFsaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgbG9hZGluZyBpbmRpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJywgJ29uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRGlzYWJsZSBidXR0b24gdG8gYXZvaWQgbXVsdGlwbGUgY2xpY2tcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTaW11bGF0ZSBhamF4IHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChzdWJtaXRCdXR0b24uY2xvc2VzdCgnZm9ybScpLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIG5ldyBGb3JtRGF0YShmb3JtKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgbWVzc2FnZSBwb3B1cC4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLQktGLINGD0YHQv9C10YjQvdC+INGB0LzQtdC90LjQu9C4INC/0LDRgNC+0LvRjFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZW1haWxcIl0nKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicGFzc3dvcmRcIl0nKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY29uZmlybS1wYXNzd29yZFwiXScpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIucmVzZXQoKTsgIC8vIHJlc2V0IHBhc3N3b3JkIG1ldGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFNZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhRXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVycm9yc0tleSBpbiBkYXRhRXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YUVycm9ycy5oYXNPd25Qcm9wZXJ0eShlcnJvcnNLZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU1lc3NhZ2UgKz0gXCJcXHJcXG5cIiArIGRhdGFFcnJvcnNbZXJyb3JzS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGRhdGFNZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsd2F5cyBleGVjdXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhpZGUgbG9hZGluZyBpbmRpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgZXJyb3IgcG9wdXAuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xuICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTb3JyeSwgbG9va3MgbGlrZSB0aGVyZSBhcmUgc29tZSBlcnJvcnMgZGV0ZWN0ZWQsIHBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwYXNzd29yZFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci51cGRhdGVGaWVsZFN0YXR1cygncGFzc3dvcmQnLCAnTm90VmFsaWRhdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciB2YWxpZGF0ZVBhc3N3b3JkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKHBhc3N3b3JkTWV0ZXIuZ2V0U2NvcmUoKSA+IDUwKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gcHVibGljIGZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X25ld19wYXNzd29yZF9mb3JtJyk7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfbmV3X3Bhc3N3b3JkX3N1Ym1pdCcpO1xuICAgICAgICAgICAgcGFzc3dvcmRNZXRlciA9IEtUUGFzc3dvcmRNZXRlci5nZXRJbnN0YW5jZShmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXBhc3N3b3JkLW1ldGVyPVwidHJ1ZVwiXScpKTtcblxuICAgICAgICAgICAgaGFuZGxlRm9ybSgpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtUUGFzc3dvcmRSZXNldE5ld1Bhc3N3b3JkLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUUGFzc3dvcmRSZXNldE5ld1Bhc3N3b3JkIiwiZm9ybSIsInN1Ym1pdEJ1dHRvbiIsInZhbGlkYXRvciIsInBhc3N3b3JkTWV0ZXIiLCJoYW5kbGVGb3JtIiwiZSIsIkZvcm1WYWxpZGF0aW9uIiwiZm9ybVZhbGlkYXRpb24iLCJmaWVsZHMiLCJ2YWxpZGF0b3JzIiwibm90RW1wdHkiLCJtZXNzYWdlIiwiY2FsbGJhY2siLCJpbnB1dCIsInZhbHVlIiwibGVuZ3RoIiwidmFsaWRhdGVQYXNzd29yZCIsImlkZW50aWNhbCIsImNvbXBhcmUiLCJxdWVyeVNlbGVjdG9yIiwicGx1Z2lucyIsInRyaWdnZXIiLCJUcmlnZ2VyIiwiZXZlbnQiLCJwYXNzd29yZCIsImJvb3RzdHJhcCIsIkJvb3RzdHJhcDUiLCJyb3dTZWxlY3RvciIsImVsZUludmFsaWRDbGFzcyIsImVsZVZhbGlkQ2xhc3MiLCJhZGRFdmVudExpc3RlbmVyIiwicHJldmVudERlZmF1bHQiLCJyZXZhbGlkYXRlRmllbGQiLCJ2YWxpZGF0ZSIsInRoZW4iLCJzdGF0dXMiLCJzZXRBdHRyaWJ1dGUiLCJkaXNhYmxlZCIsImF4aW9zIiwicG9zdCIsImNsb3Nlc3QiLCJnZXRBdHRyaWJ1dGUiLCJGb3JtRGF0YSIsInJlc3BvbnNlIiwiU3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY29uZmlybUJ1dHRvblRleHQiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInJlc2V0IiwiZXJyb3IiLCJkYXRhTWVzc2FnZSIsImRhdGEiLCJkYXRhRXJyb3JzIiwiZXJyb3JzIiwiZXJyb3JzS2V5IiwiaGFzT3duUHJvcGVydHkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ1cGRhdGVGaWVsZFN0YXR1cyIsImdldFNjb3JlIiwiaW5pdCIsImRvY3VtZW50IiwiS1RQYXNzd29yZE1ldGVyIiwiZ2V0SW5zdGFuY2UiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/extended/js/custom/authentication/password-reset/new-password.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/extended/js/custom/authentication/password-reset/new-password.js"]();
/******/ 	
/******/ })()
;