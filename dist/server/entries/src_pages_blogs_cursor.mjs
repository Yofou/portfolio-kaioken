import { H as HrTitle, i as import_0 } from "../chunks/chunk-Bng90Um4.js";
import { jsx, jsxs, Fragment } from "kaioken/jsx-runtime.js";
import "kaioken";
import "vike/server";
import "tiny-emitter";
import "@kaioken-core/hooks";
import "svelte/motion";
import "svelte/store";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(HrTitle, {
      children: "Forging a great cursor"
    }), "\n", jsx(_components.h1, {
      children: "Oh boy... where do we begin."
    }), "\n", jsxs("div", {
      className: "w-full grid grid-cols-1 md:grid-cols-[1fr,max-content] gap-4 items-center",
      children: [jsx(_components.p, {
        children: "To get started, it's important to have a strong foundation in web development, including familiarity with variables, conditionals, event handling, and the use of CSS classes and custom properties. Additionally, it can be useful to understand the difference between time-based and spring-based animations. While this distinction is not strictly necessary, time-based animations rely on duration, similar to CSS transitions, while spring-based animations use physical properties such as stiffness and damping to create more realistic, fluid animations. However, if you are not particularly interested in researching these topics, that's okay as well, just know you'll likely use both somewhere here."
      }), jsx("img", {
        className: "w-full md:w-[290px]",
        src: "/blogs/cursor/moreyouknow.gif"
      })]
    }), "\n", jsx(HrTitle, {
      children: "Structure"
    }), "\n", jsx(_components.p, {
      children: "When creating a custom cursor, there are a few important things to keep in mind. For example, you'll need to consider how the cursor behaves during scrolling, how it reacts to DOM mutations, and how it responds to pointer events. In this mini-tutorial, we will only be focusing on scroll and pointer-events."
    }), "\n", jsx(_components.p, {
      children: "To get started, let's take a look at the approach we'll be using. When animating an element on a screen, it is generally best practice to use the transform property with the translate function. In our case, we want to keep the cursor in the top left corner of the screen, so we will use these techniques to move the cursor to that location. Make sure to double check that there is no padding or margin that could potentially push the cursor out of place. We can use the Firefox dev tools to visualize our progress and ensure that the cursor is being positioned correctly."
    }), "\n", jsx("video", {
      autoplay: true,
      height: "523",
      children: jsx("source", {
        src: "/blogs/cursor/demo.mp4",
        type: "video/mp4"
      })
    }), "\n", jsx(_components.p, {
      children: "If you would like a visual representation of the transformation, I have created a repl that demonstrates the movement of the cursor. While the code in the repl is written in svelte, you do not need to have any prior knowledge of svelte to understand it. I have included explanations for any svelte-specific concepts. Now, let's move on to the coding portion of this tutorial. We will start by setting up the basic HTML structure for the cursor, and then we will add the necessary JavaScript in the next step."
    }), "\n", jsx(_components.pre, {
      className: "shiki rose-pine-moon",
      style: {
        backgroundColor: "#232136",
        color: "#e0def4"
      },
      tabIndex: "0",
      children: jsxs(_components.code, {
        children: [jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "div"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "	class"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: '"cursor"'
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "/>"
          })
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "style"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: "	:global("
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "*"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: "), :global("
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "body"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: ") "
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "{"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		padding"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		margin"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "	}"
          })
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#908CAA",
              fontStyle: "italic"
            },
            children: "	."
          }), jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "cursor"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		width"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 35"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		height"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 35"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		border-radius"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 50"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "%"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		border"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 2"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: " solid red"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "	}"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "</"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "style"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        })]
      })
    }), "\n", jsx(_components.p, {
      children: "Looking at this code, we have <div /> that is our custom cursor element which we styled to be a red 35px diameter circle, pretty simple stuff. now let's get into the fun part, adding the JS."
    }), "\n", jsx(HrTitle, {
      children: "Motion"
    }), "\n", jsx(_components.pre, {
      className: "shiki rose-pine-moon",
      style: {
        backgroundColor: "#232136",
        color: "#e0def4"
      },
      tabIndex: "0",
      children: jsxs(_components.code, {
        children: [jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "script"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "	let"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " mouseCoords"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " };"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "	const"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97",
              fontStyle: "italic"
            },
            children: " onMouseMove"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " ("
          }), jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "event"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ")"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " =>"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "		mouseCoords"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " event"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " event"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " }"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "	}"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "</"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "script"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "svelte"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "window"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " on"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "mousemove"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "={"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "onMouseMove"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: " />"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "div"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "	class"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: '"cursor"'
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "	style"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "--x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "={"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "${"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "mouseCoords"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "px`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "	style"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "--y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "={"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "${"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "mouseCoords"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "px`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "/>"
          })
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "style"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: "	:global("
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "*"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: "), :global("
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "body"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: ") "
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "{"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		padding"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		margin"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "	}"
          })
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#908CAA",
              fontStyle: "italic"
            },
            children: "	."
          }), jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "cursor"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		width"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 35"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		height"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 35"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		border-radius"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 50"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "%"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		border"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 2"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: " solid red"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		transform"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: " translate"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: "-50"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "%"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " -50"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "%"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ")"
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: " translate"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: "var"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "--x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "),"
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: " var"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "--y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "));"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "	}"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "</"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "style"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        })]
      })
    }), "\n", jsx(_components.p, {
      children: "To set up our cursor animation, we first need to create an object called mouseCoords that stores the x and y coordinates of the mouse. We do this using the script tag and an event function at the top of the code. Then, we use these values to set custom CSS properties within the cursor div. In svelte, this is equivalent to using the style attribute in HTML. The custom CSS properties, along with the translate function, allow us to position the cursor relative to the mouse. You may have noticed the translate(-50%, -50%) function, which centers the cursor on the mouse cursor. If we didn't include this, the cursor would default to the top left corner of the mouse cursor. When you have completed these steps, you should have a circle that follows the mouse around on the screen and it should look something like this."
    }), "\n", jsxs(_components.p, {
      children: [jsx(HrTitle, {
        children: "Fluidity"
      }), "\nIf you've been following along with the code or just testing out the examples, you may have noticed that our cursor follows the mouse, but it feels very stiff and not particularly pleasant to use. In the next step, we will look at ways to improve the movement of the cursor and make it feel more natural."]
    }), "\n", jsx(_components.p, {
      children: "Earlier, I mentioned the concept of spring-based animations. This is where those come in handy. While it might seem tempting to simply use the transition property with the transform function to animate the cursor, however this approach has some disadvantages. For example, when chaining different actions together, you may notice that the animation appears fragmented or stuttered on the screen. Even if you don't experience these issues, you may still find it difficult to differentiate between different timings of the types of animations, such as scaling or 3D effects, etc, when using the transition property. Therefore, even if you do not use a spring-based animation library, I still recommend using some kind of animation library that will give you more control in the long run."
    }), "\n", jsx(_components.p, {
      children: "Fortunately, svelte has a built-in tween and spring animation library, which makes it easy for us to add these features to our cursor. As a side note, you may have noticed that I prefix any assignments or accesses to the mouseCoords variable with a $ symbol in the next code example. This is just svelte's syntax for subscribing to or setting the value of an animation store. These stores can be thought of as observables, similar to variables that can be watched for changes."
    }), "\n", jsx(_components.pre, {
      className: "shiki rose-pine-moon",
      style: {
        backgroundColor: "#232136",
        color: "#e0def4"
      },
      tabIndex: "0",
      children: jsxs(_components.code, {
        children: [jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "script"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "	import "
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "{"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " spring"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " }"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " from "
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: '"svelte/motion"'
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "	const"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " mouseCoords"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " spring"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "{"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " }"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: ")"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "	const"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97",
              fontStyle: "italic"
            },
            children: " onMouseMove"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " ("
          }), jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "event"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ")"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " =>"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "		$"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "mouseCoords"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " event"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " event"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " }"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "	}"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "</"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "script"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "svelte"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "window"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " on"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "mousemove"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "={"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "onMouseMove"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: " />"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "div"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "	class"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: '"cursor"'
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "	style"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "--x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "={"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "${"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "$"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "mouseCoords"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "px`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "	style"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "--y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "={"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "${"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "$"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "mouseCoords"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "px`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "/>"
          })
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "style"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: "	:global("
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "*"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: "), :global("
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "body"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: ") "
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "{"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		padding"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		margin"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "	}"
          })
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#908CAA",
              fontStyle: "italic"
            },
            children: "	."
          }), jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "cursor"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		width"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 35"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		height"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 35"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		border-radius"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 50"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "%"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		border"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 2"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: " solid red"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		transform"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: " translate"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: "-50"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "%"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " -50"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "%"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ")"
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: " translate"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: "var"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "--x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "),"
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: " var"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "--y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "));"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "	}"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "</"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "style"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        })]
      })
    }), "\n", jsx(_components.p, {
      children: "As you can see in this code, all I did was wrap the mouseCoords object with the spring function. This interpolates the values from the starting value to the assigned value, and it makes a huge difference in the feel and flow of the cursor. You can also adjust the stiffness and damping values to achieve a specific feel, but the default values work well for now. If you are using React rather than svelte, a good library to try is react-spring, which should provide similar functionality."
    }), "\n", jsx(_components.p, {
      children: "To complete this section, I've also added support for scrolling with the cursor. If you try scrolling with the current code, you'll notice that the cursor becomes increasingly offset from the actual mouse position as you scroll. There are a few different ways to solve this problem, but my favorite solution is to use CSS. Here is an example of how this can be achieved:"
    }), "\n", jsx(_components.pre, {
      className: "shiki rose-pine-moon",
      style: {
        backgroundColor: "#232136",
        color: "#e0def4"
      },
      tabIndex: "0",
      children: jsxs(_components.code, {
        children: [jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "script"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "	import "
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "{"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " spring"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " }"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " from "
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: '"svelte/motion"'
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "	const"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " mouseCoords"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " spring"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "{"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " }"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: ")"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "	const"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97",
              fontStyle: "italic"
            },
            children: " onMouseMove"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " ("
          }), jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "event"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ")"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " =>"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "		$"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "mouseCoords"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " event"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " event"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " }"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "	}"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "</"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "script"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "svelte"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "window"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " on"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "mousemove"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "={"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "onMouseMove"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: " />"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "div"
          }), jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: " class"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: '"container"'
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "	<"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "div"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "		class"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: '"cursor"'
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "		style"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "--x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "={"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "${"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "$"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "mouseCoords"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "px`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "		style"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "--y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "={"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "${"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "$"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "mouseCoords"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "px`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "	/>"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "</"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "div"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "style"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: "	:global("
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "body"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: ") "
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "{"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		width"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 100"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "vw"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		height"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 200"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "vh"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "	}"
          })
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: "	:global("
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "*"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: "), :global("
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "body"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: ") "
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "{"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		padding"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		margin"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "	}"
          })
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#908CAA",
              fontStyle: "italic"
            },
            children: "	."
          }), jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "container"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		position"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: " fixed"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		top"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		left"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		width"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 100"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "%"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		height"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 100"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "%"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		pointer-events"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: " none"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "	}"
          })
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#908CAA",
              fontStyle: "italic"
            },
            children: "	."
          }), jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "cursor"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		position"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: " absolute"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		top"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		left"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		width"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 35"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		height"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 35"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		border-radius"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 50"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "%"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		border"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 2"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: " solid red"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "		transform"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: " translate"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: "-50"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "%"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " -50"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "%"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ")"
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: " translate"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: "var"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "--x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "),"
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: " var"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "--y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "));"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "	}"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "</"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "style"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        })]
      })
    }), "\n", jsx(_components.p, {
      children: "If you take a look at the REPL, you will see that the cursor now sticks to the mouse when scrolling. We accomplish this by wrapping the cursor in a container element that is positioned fixed in the viewport, and we apply the pointer-events: none; property to this element. This CSS property allows users to click through elements as if they were not there, effectively making the container element transparent like it was never there."
    }), "\n", jsxs(_components.p, {
      children: [jsx(HrTitle, {
        children: "Interactiveness"
      }), "\nSo let's take this little further and show you how to make the cursor interact with other elements on the site, read this it's super simple bu don't worry I'll explain it later."]
    }), "\n", jsx(_components.p, {
      children: "In this code, we are simply extending the onMouseMove function to include additional functionality. We use the event object to access the element that the mouse is hovering over by using event.target. Then, we use the instanceof keyword to determine the type of element we are hovering over. You can find a list of all the available element types here. In this example, we are using the instanceof keyword to scale up the cursor when it is hovering over certain elements. The resulting code will produce this effect."
    }), "\n", jsx(HrTitle, {
      children: "Communication"
    }), "\n", jsx(_components.p, {
      children: "So far, you have learned about the structure, motion, fluidity, and interactiveness of the cursor. But what about communication? As it stands, the cursor is able to identify the type of element it is interacting with, but how can we make the cursor understand other aspects, like styling, and allow the element to communicate extra information to the cursor itself? This is an important question to consider as we continue to develop the cursor."
    }), "\n", jsx(_components.p, {
      children: "The key to answering these questions lies in three things: data-attributes, computed styles, and getBoundingClientRect. These tools will give you everything you need to create component-level interactivity with your cursor. Let's see how we can use them to implement this functionality."
    }), "\n", jsx(_components.pre, {
      className: "shiki rose-pine-moon",
      style: {
        backgroundColor: "#232136",
        color: "#e0def4"
      },
      tabIndex: "0",
      children: jsxs(_components.code, {
        children: [jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "script"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "import "
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "{"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " spring"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " }"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " from "
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: '"svelte/motion"'
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "const"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " mouseCoords"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " spring"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "{"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " }"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: ")"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "const"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " morph"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " spring"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "{"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " diameter"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 35"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " }"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: ")"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "let"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " color"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " null"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "const"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97",
              fontStyle: "italic"
            },
            children: " onMouseMove"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " ("
          }), jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "event"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ")"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " =>"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "	$"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "mouseCoords"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " event"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " event"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " }"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "const"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97",
              fontStyle: "italic"
            },
            children: " onMouseOver"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " ("
          }), jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "event"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ")"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " =>"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "	if"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " ("
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "event"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "target"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " instanceof"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: " HTMLElement"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: ") "
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "{"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "		const"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " rect"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " event"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "target"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: "getBoundingClientRect"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: "()"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "		const"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " styles"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " window"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: "getComputedStyle"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "event"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "target"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: ")"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "		if"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " ("
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "styles"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "cursor"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ==="
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: ' "pointer"'
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: ") "
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "{"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "			$"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "morph"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " diameter"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " rect"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "width"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " >"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " rect"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "height"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ?"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " rect"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "width"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " :"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " rect"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "height"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " }"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "			const"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " attr"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: " event"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "target"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "dataset"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "color"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "			if"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " ("
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "attr"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: ") "
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "color"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "attr"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "		}"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "	}"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "const"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97",
              fontStyle: "italic"
            },
            children: " onMouseOut"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " ("
          }), jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "event"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ")"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " =>"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "	$"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "morph"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " diameter"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 35"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " }"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "	color"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " null"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "</"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "script"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "svelte"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "window"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "	on"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "mousemove"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "={"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "onMouseMove"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "	on"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "mouseover"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "={"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "onMouseOver"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "	on"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "mouseout"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "={"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "onMouseOut"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "/>"
          })
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "div"
          }), jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: " class"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: '"container"'
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "	<"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "div"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "		class"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: '"cursor"'
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "		style"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "--x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "={"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "${"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "$"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "mouseCoords"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "px`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "		style"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "--y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "={"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "${"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "$"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "mouseCoords"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "px`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "		style"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "--diameter"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "={"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "${"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "$"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "morph"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "diameter"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: "px`"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "		style"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "--color"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "={"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "color"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "	/>"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "</"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "div"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "<"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "style"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#908CAA",
              fontStyle: "italic"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "container"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "	position"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: " fixed"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "	top"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "	left"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "	width"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 100"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "%"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "	height"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 100"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "%"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "	pointer-events"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: " none"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#908CAA",
              fontStyle: "italic"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#C4A7E7",
              fontStyle: "italic"
            },
            children: "cursor"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: " {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "	position"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: " absolute"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "	top"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "	left"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "	width"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: " var"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "--diameter"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 35"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ");"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "	height"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: " var"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "--diameter"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 35"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ");"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "	border-radius"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 50"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "%"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "	border"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 2"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: " solid "
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: "var"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "--color"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: " red"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ");"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "	transform"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ":"
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4"
            },
            children: " "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: "      translate"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: "-50"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "%"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " -50"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "%"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ")"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: " "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: "      translate"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: "var"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "--x"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "),"
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: " var"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "--y"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#3E8FB0"
            },
            children: "px"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "))"
          }), jsx(_components.span, {
            style: {
              color: "#F6C177"
            },
            children: " "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: "      scale"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#EB6F92",
              fontStyle: "italic"
            },
            children: "var"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#E0DEF4",
              fontStyle: "italic"
            },
            children: "--scale"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: ","
          }), jsx(_components.span, {
            style: {
              color: "#EA9A97"
            },
            children: " 1"
          }), jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "));"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#908CAA"
            },
            children: "}"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: "</"
          }), jsx(_components.span, {
            style: {
              color: "#9CCFD8"
            },
            children: "style"
          }), jsx(_components.span, {
            style: {
              color: "#6E6A86"
            },
            children: ">"
          })]
        }), "\n", jsx(_components.span, {
          className: "line"
        })]
      })
    }), "\n", jsx(_components.p, {
      children: "To begin, we start off in a similar way to our last example by using event.target to access the element that the mouse is currently hovering over. With this information, we can gather the width, height, and position of the element using the getBoundingClientRect function. Then, we can use the getComputedStyle function to gather any additional information we might need, such as the cursor pointer to activate interactions. We can also use data-attributes to change the color of the cursor when hovering over an element. When you have implemented these features, your cursor should be fully functional and look something like this."
    }), "\n", jsxs(_components.p, {
      children: [jsx(HrTitle, {
        children: "Conclusion"
      }), "\nI hope you enjoyed this tutorial and reading my first blog! I am excited to see everyone's custom cursors, but it's important to note that this tutorial is not exhaustive and you may encounter some unexpected edge cases as you work on your own cursor. Be prepared to troubleshoot and don't be afraid to seek out additional resources. Who knows, maybe I'll cover some of these edge cases in a future blog post. Thanks for reading!"]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent
}, Symbol.toStringTag, { value: "Module" }));
const configValuesImported = [
  {
    configName: "onRenderHtml",
    importPath: "/src/renderer/+onRenderHtml.tsx",
    isValueFile: true,
    exportValues: import_0
  },
  {
    configName: "Page",
    importPath: "/src/pages/blogs/cursor/+Page.mdx",
    isValueFile: true,
    exportValues: import_1
  }
];
const configValuesSerialized = {
  ["passToClient"]: {
    definedAt: { "files": [{ "filePathToShowToUser": "/src/renderer/+config.ts", "fileExportPathToShowToUser": ["default", "passToClient"] }] },
    valueSerialized: '["routeParams","Layout"]'
  }
};
export {
  configValuesImported,
  configValuesSerialized
};
