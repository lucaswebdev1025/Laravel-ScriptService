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

/***/ "./resources/assets/core/js/custom/documentation/general/draggable/restricted.js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/general/draggable/restricted.js ***!
  \***************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTDraggableRestricted = function () {\n  // Private functions\n  var exampleRestricted = function exampleRestricted() {\n    var containers = document.querySelectorAll('.draggable-zone');\n    var restrcitedWrapper = document.querySelector('[data-kt-draggable-level=\"restricted\"]');\n\n    if (containers.length === 0) {\n      return false;\n    }\n\n    var droppable = new Droppable[\"default\"](containers, {\n      draggable: '.draggable',\n      dropzone: '.draggable-zone',\n      handle: '.draggable .draggable-handle',\n      mirror: {\n        //appendTo: selector,\n        appendTo: 'body',\n        constrainDimensions: true\n      }\n    }); // Define draggable element variable for permissions level\n\n    var droppableOrigin; // Handle drag start event -- more info: https://shopify.github.io/draggable/docs/class/src/Draggable/DragEvent/DragEvent.js~DragEvent.html\n\n    droppable.on('drag:start', function (e) {\n      droppableOrigin = e.originalSource.getAttribute('data-kt-draggable-level');\n    }); // Handle drag over event -- more info: https://shopify.github.io/draggable/docs/class/src/Draggable/DragEvent/DragEvent.js~DragOverEvent.html\n\n    droppable.on('drag:over', function (e) {\n      var isRestricted = e.overContainer.closest('[data-kt-draggable-level=\"restricted\"]');\n\n      if (isRestricted) {\n        if (droppableOrigin !== 'admin') {\n          restrcitedWrapper.classList.add('bg-light-danger');\n        } else {\n          restrcitedWrapper.classList.remove('bg-light-danger');\n        }\n      } else {\n        restrcitedWrapper.classList.remove('bg-light-danger');\n      }\n    }); // Handle drag stop event -- more info: https://shopify.github.io/draggable/docs/class/src/Draggable/DragEvent/DragEvent.js~DragStopEvent.html\n\n    droppable.on('drag:stop', function (e) {\n      // remove all draggable occupied limit\n      containers.forEach(function (c) {\n        c.classList.remove('draggable-dropzone--occupied');\n      }); // Remove restricted alert\n\n      restrcitedWrapper.classList.remove('bg-light-danger');\n    }); // Handle drop event -- https://shopify.github.io/draggable/docs/class/src/Droppable/DroppableEvent/DroppableEvent.js~DroppableDroppedEvent.html\n\n    droppable.on('droppable:dropped', function (e) {\n      var isRestricted = e.dropzone.closest('[data-kt-draggable-level=\"restricted\"]'); // Detect if drop container is restricted\n\n      if (isRestricted) {\n        // Check if dragged element has permission level\n        if (droppableOrigin !== 'admin') {\n          restrcitedWrapper.classList.add('bg-light-danger');\n          e.cancel();\n        }\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleRestricted();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTDraggableRestricted.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9kcmFnZ2FibGUvcmVzdHJpY3RlZC5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxxQkFBcUIsR0FBRyxZQUFZO0FBQ3BDO0FBQ0EsTUFBSUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFZO0FBQ2hDLFFBQUlDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBakI7QUFDQSxRQUFNQyxpQkFBaUIsR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLHdDQUF2QixDQUExQjs7QUFFQSxRQUFJSixVQUFVLENBQUNLLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDekIsYUFBTyxLQUFQO0FBQ0g7O0FBRUQsUUFBSUMsU0FBUyxHQUFHLElBQUlDLFNBQVMsV0FBYixDQUFzQlAsVUFBdEIsRUFBa0M7QUFDOUNRLE1BQUFBLFNBQVMsRUFBRSxZQURtQztBQUU5Q0MsTUFBQUEsUUFBUSxFQUFFLGlCQUZvQztBQUc5Q0MsTUFBQUEsTUFBTSxFQUFFLDhCQUhzQztBQUk5Q0MsTUFBQUEsTUFBTSxFQUFFO0FBQ0o7QUFDQUMsUUFBQUEsUUFBUSxFQUFFLE1BRk47QUFHSkMsUUFBQUEsbUJBQW1CLEVBQUU7QUFIakI7QUFKc0MsS0FBbEMsQ0FBaEIsQ0FSZ0MsQ0FtQmhDOztBQUNBLFFBQUlDLGVBQUosQ0FwQmdDLENBc0JoQzs7QUFDQVIsSUFBQUEsU0FBUyxDQUFDUyxFQUFWLENBQWEsWUFBYixFQUEyQixVQUFDQyxDQUFELEVBQU87QUFDOUJGLE1BQUFBLGVBQWUsR0FBR0UsQ0FBQyxDQUFDQyxjQUFGLENBQWlCQyxZQUFqQixDQUE4Qix5QkFBOUIsQ0FBbEI7QUFDSCxLQUZELEVBdkJnQyxDQTJCaEM7O0FBQ0FaLElBQUFBLFNBQVMsQ0FBQ1MsRUFBVixDQUFhLFdBQWIsRUFBMEIsVUFBQ0MsQ0FBRCxFQUFPO0FBQzdCLFVBQU1HLFlBQVksR0FBR0gsQ0FBQyxDQUFDSSxhQUFGLENBQWdCQyxPQUFoQixDQUF3Qix3Q0FBeEIsQ0FBckI7O0FBQ0EsVUFBSUYsWUFBSixFQUFrQjtBQUNkLFlBQUlMLGVBQWUsS0FBSyxPQUF4QixFQUFpQztBQUM3QlgsVUFBQUEsaUJBQWlCLENBQUNtQixTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsaUJBQWhDO0FBQ0gsU0FGRCxNQUVPO0FBQ0hwQixVQUFBQSxpQkFBaUIsQ0FBQ21CLFNBQWxCLENBQTRCRSxNQUE1QixDQUFtQyxpQkFBbkM7QUFDSDtBQUNKLE9BTkQsTUFNTztBQUNIckIsUUFBQUEsaUJBQWlCLENBQUNtQixTQUFsQixDQUE0QkUsTUFBNUIsQ0FBbUMsaUJBQW5DO0FBQ0g7QUFDSixLQVhELEVBNUJnQyxDQXlDaEM7O0FBQ0FsQixJQUFBQSxTQUFTLENBQUNTLEVBQVYsQ0FBYSxXQUFiLEVBQTBCLFVBQUNDLENBQUQsRUFBTztBQUM3QjtBQUNBaEIsTUFBQUEsVUFBVSxDQUFDeUIsT0FBWCxDQUFtQixVQUFBQyxDQUFDLEVBQUk7QUFDcEJBLFFBQUFBLENBQUMsQ0FBQ0osU0FBRixDQUFZRSxNQUFaLENBQW1CLDhCQUFuQjtBQUNILE9BRkQsRUFGNkIsQ0FNN0I7O0FBQ0FyQixNQUFBQSxpQkFBaUIsQ0FBQ21CLFNBQWxCLENBQTRCRSxNQUE1QixDQUFtQyxpQkFBbkM7QUFDSCxLQVJELEVBMUNnQyxDQW9EaEM7O0FBQ0FsQixJQUFBQSxTQUFTLENBQUNTLEVBQVYsQ0FBYSxtQkFBYixFQUFrQyxVQUFDQyxDQUFELEVBQU87QUFDckMsVUFBTUcsWUFBWSxHQUFHSCxDQUFDLENBQUNQLFFBQUYsQ0FBV1ksT0FBWCxDQUFtQix3Q0FBbkIsQ0FBckIsQ0FEcUMsQ0FFckM7O0FBQ0EsVUFBSUYsWUFBSixFQUFrQjtBQUNkO0FBQ0EsWUFBSUwsZUFBZSxLQUFLLE9BQXhCLEVBQWlDO0FBQzdCWCxVQUFBQSxpQkFBaUIsQ0FBQ21CLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQyxpQkFBaEM7QUFDQVAsVUFBQUEsQ0FBQyxDQUFDVyxNQUFGO0FBQ0g7QUFDSjtBQUNKLEtBVkQ7QUFXSCxHQWhFRDs7QUFrRUEsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkN0IsTUFBQUEsaUJBQWlCO0FBQ3BCO0FBSkUsR0FBUDtBQU1ILENBMUUyQixFQUE1QixDLENBNEVBOzs7QUFDQThCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ2hDLEVBQUFBLHFCQUFxQixDQUFDOEIsSUFBdEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZHJhZ2dhYmxlL3Jlc3RyaWN0ZWQuanM/MTc5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURHJhZ2dhYmxlUmVzdHJpY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlUmVzdHJpY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ2dhYmxlLXpvbmUnKTtcbiAgICAgICAgY29uc3QgcmVzdHJjaXRlZFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1kcmFnZ2FibGUtbGV2ZWw9XCJyZXN0cmljdGVkXCJdJyk7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZHJvcHBhYmxlID0gbmV3IERyb3BwYWJsZS5kZWZhdWx0KGNvbnRhaW5lcnMsIHtcbiAgICAgICAgICAgIGRyYWdnYWJsZTogJy5kcmFnZ2FibGUnLFxuICAgICAgICAgICAgZHJvcHpvbmU6ICcuZHJhZ2dhYmxlLXpvbmUnLFxuICAgICAgICAgICAgaGFuZGxlOiAnLmRyYWdnYWJsZSAuZHJhZ2dhYmxlLWhhbmRsZScsXG4gICAgICAgICAgICBtaXJyb3I6IHtcbiAgICAgICAgICAgICAgICAvL2FwcGVuZFRvOiBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICBhcHBlbmRUbzogJ2JvZHknLFxuICAgICAgICAgICAgICAgIGNvbnN0cmFpbkRpbWVuc2lvbnM6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRGVmaW5lIGRyYWdnYWJsZSBlbGVtZW50IHZhcmlhYmxlIGZvciBwZXJtaXNzaW9ucyBsZXZlbFxuICAgICAgICBsZXQgZHJvcHBhYmxlT3JpZ2luO1xuXG4gICAgICAgIC8vIEhhbmRsZSBkcmFnIHN0YXJ0IGV2ZW50IC0tIG1vcmUgaW5mbzogaHR0cHM6Ly9zaG9waWZ5LmdpdGh1Yi5pby9kcmFnZ2FibGUvZG9jcy9jbGFzcy9zcmMvRHJhZ2dhYmxlL0RyYWdFdmVudC9EcmFnRXZlbnQuanN+RHJhZ0V2ZW50Lmh0bWxcbiAgICAgICAgZHJvcHBhYmxlLm9uKCdkcmFnOnN0YXJ0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGRyb3BwYWJsZU9yaWdpbiA9IGUub3JpZ2luYWxTb3VyY2UuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LWRyYWdnYWJsZS1sZXZlbCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBIYW5kbGUgZHJhZyBvdmVyIGV2ZW50IC0tIG1vcmUgaW5mbzogaHR0cHM6Ly9zaG9waWZ5LmdpdGh1Yi5pby9kcmFnZ2FibGUvZG9jcy9jbGFzcy9zcmMvRHJhZ2dhYmxlL0RyYWdFdmVudC9EcmFnRXZlbnQuanN+RHJhZ092ZXJFdmVudC5odG1sXG4gICAgICAgIGRyb3BwYWJsZS5vbignZHJhZzpvdmVyJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzUmVzdHJpY3RlZCA9IGUub3ZlckNvbnRhaW5lci5jbG9zZXN0KCdbZGF0YS1rdC1kcmFnZ2FibGUtbGV2ZWw9XCJyZXN0cmljdGVkXCJdJyk7XG4gICAgICAgICAgICBpZiAoaXNSZXN0cmljdGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRyb3BwYWJsZU9yaWdpbiAhPT0gJ2FkbWluJykge1xuICAgICAgICAgICAgICAgICAgICByZXN0cmNpdGVkV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdiZy1saWdodC1kYW5nZXInKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN0cmNpdGVkV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdiZy1saWdodC1kYW5nZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3RyY2l0ZWRXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLWxpZ2h0LWRhbmdlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBIYW5kbGUgZHJhZyBzdG9wIGV2ZW50IC0tIG1vcmUgaW5mbzogaHR0cHM6Ly9zaG9waWZ5LmdpdGh1Yi5pby9kcmFnZ2FibGUvZG9jcy9jbGFzcy9zcmMvRHJhZ2dhYmxlL0RyYWdFdmVudC9EcmFnRXZlbnQuanN+RHJhZ1N0b3BFdmVudC5odG1sXG4gICAgICAgIGRyb3BwYWJsZS5vbignZHJhZzpzdG9wJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbGwgZHJhZ2dhYmxlIG9jY3VwaWVkIGxpbWl0XG4gICAgICAgICAgICBjb250YWluZXJzLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAgICAgYy5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2FibGUtZHJvcHpvbmUtLW9jY3VwaWVkJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHJlc3RyaWN0ZWQgYWxlcnRcbiAgICAgICAgICAgIHJlc3RyY2l0ZWRXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLWxpZ2h0LWRhbmdlcicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBIYW5kbGUgZHJvcCBldmVudCAtLSBodHRwczovL3Nob3BpZnkuZ2l0aHViLmlvL2RyYWdnYWJsZS9kb2NzL2NsYXNzL3NyYy9Ecm9wcGFibGUvRHJvcHBhYmxlRXZlbnQvRHJvcHBhYmxlRXZlbnQuanN+RHJvcHBhYmxlRHJvcHBlZEV2ZW50Lmh0bWxcbiAgICAgICAgZHJvcHBhYmxlLm9uKCdkcm9wcGFibGU6ZHJvcHBlZCcsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc1Jlc3RyaWN0ZWQgPSBlLmRyb3B6b25lLmNsb3Nlc3QoJ1tkYXRhLWt0LWRyYWdnYWJsZS1sZXZlbD1cInJlc3RyaWN0ZWRcIl0nKTtcbiAgICAgICAgICAgIC8vIERldGVjdCBpZiBkcm9wIGNvbnRhaW5lciBpcyByZXN0cmljdGVkXG4gICAgICAgICAgICBpZiAoaXNSZXN0cmljdGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZHJhZ2dlZCBlbGVtZW50IGhhcyBwZXJtaXNzaW9uIGxldmVsXG4gICAgICAgICAgICAgICAgaWYgKGRyb3BwYWJsZU9yaWdpbiAhPT0gJ2FkbWluJykge1xuICAgICAgICAgICAgICAgICAgICByZXN0cmNpdGVkV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdiZy1saWdodC1kYW5nZXInKTtcbiAgICAgICAgICAgICAgICAgICAgZS5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZXhhbXBsZVJlc3RyaWN0ZWQoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICBLVERyYWdnYWJsZVJlc3RyaWN0ZWQuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1REcmFnZ2FibGVSZXN0cmljdGVkIiwiZXhhbXBsZVJlc3RyaWN0ZWQiLCJjb250YWluZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVzdHJjaXRlZFdyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwiZHJvcHBhYmxlIiwiRHJvcHBhYmxlIiwiZHJhZ2dhYmxlIiwiZHJvcHpvbmUiLCJoYW5kbGUiLCJtaXJyb3IiLCJhcHBlbmRUbyIsImNvbnN0cmFpbkRpbWVuc2lvbnMiLCJkcm9wcGFibGVPcmlnaW4iLCJvbiIsImUiLCJvcmlnaW5hbFNvdXJjZSIsImdldEF0dHJpYnV0ZSIsImlzUmVzdHJpY3RlZCIsIm92ZXJDb250YWluZXIiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZm9yRWFjaCIsImMiLCJjYW5jZWwiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/general/draggable/restricted.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/general/draggable/restricted.js"]();
/******/ 	
/******/ })()
;