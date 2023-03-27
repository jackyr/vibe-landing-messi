import { TypographyComponent } from './typography'

const ButtonComponent = {
  MuiButton: {
    styleOverrides: {
      root: {
        boxShadow: "none"
      },
      sizeSmall: {
        height: 28,
        fontSize: 12,
        borderRadius: 4,
        padding: "6px 12px"
      },
      sizeMedium: {
        height: 36,
        fontSize: 14,
        borderRadius: 4,
        padding: "8px 16px"
      },
      sizeLarge: {
        height: 44,
        fontSize: 16,
        borderRadius: 4,
        padding: "10px 20px"
      }
    }
  }
}

const buildVar = function(name: any) {
  const NAMESPACE = "--vb-";
  return `${NAMESPACE}${name}`;
}

export const ComponentOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme2: any) => {
        const common = theme2.palette.common;
        const vars = Object.keys(common).reduce((prev, next) => {
          (prev as any)[buildVar(next)] = common[next];
          return prev;
        }, {});
        return {
          html: {
            ...vars
          },
          body: {
            color: common["gray-400"],
            background: "var(--vb-black)"
          },
          a: {
            textDecoration: "none",
            color: "inherit"
          },
          picture: {
            display: "inline-flex",
            width: "100%",
            height: "100%",
            img: {
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "cover"
            }
          },
          input: {
            "&::placeholder": {
              color: "var(--vb-gary-500)",
              fontSize: "inherit"
            },
            "&:-webkit-autofill, &:-webkit-autofill:focus": {
              transition: "background-color 600000s 0s, color 600000s 0s"
            }
          }
        };
      }
    },
    ...ButtonComponent,
    ...TypographyComponent,
    MuiContainer: {
      styleOverrides: {
        root: {
          // padding: "0 16px"
        }
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: "var(--vb-black)",
          text: {
            fill: "var(--vb-white)"
          },
          "&.Mui-active": {
            color: "var(--vb-black)",
            boxShadow: "0 0 0 1px var(--vb-primary)",
            borderRadius: "50%",
            text: {
              fill: "var(--vb-primary)"
            }
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          borderRradius: "2px 2px 0px 0px",
          "&.Mui-disabled": {
            color: "var(--vb-gray-700)"
          }
        },
        textColorPrimary: {
          color: "var(--vb-gray-300)",
          "&:hover": { backgroundColor: "var(--vb-gray-900)" }
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          ".MuiTableCell-root": {
            border: "0 none",
            color: "var(--vb-gray-400)"
          },
          ".MuiTableHead-root": {
            padding: "8px 16px",
            fontSize: 12,
            lineHeight: 16 / 12,
            ".MuiTableCell-root": {
              padding: "8px 16px",
              borderBottom: "1px solid var(--vb-gray-800)"
            }
          },
          ".MuiTableBody-root": {
            ".MuiTableRow-root:hover": {
              background: "var(--vb-surface-4)"
            }
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {},
        sizeSmall: {
          height: 22,
          padding: "4px 0",
          borderRadius: "4px"
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "var(--vb-surface-4)"
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 4,
          background: "var(--vb-gary-900)",
          ".MuiSvgIcon-root": {
            fontSize: 16
          }
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: "none",
          color: "var(--vb-gray-100)",
          ".MuiAccordionSummary-root": {
            padding: 0
          },
          ".MuiAccordionDetails-root": {
            padding: "0 0 16px 0"
          },
          ".MuiFormControlLabel-root": {
            marginLeft: -5
          },
          ".MuiAccordionSummary-root.Mui-expanded": {
            minHeight: "48px",
            padding: 0
          },
          "&.MuiPaper-root.Mui-expanded": {
            margin: 0,
            "&:before": {
              opacity: 1
            },
            ".MuiAccordionSummary-content.Mui-expanded": {
              margin: "6px 0"
            }
          },
          ".MuiCollapse-wrapperInner": {
            ".MuiAccordionSummary-root": {
              minHeight: 20,
              ".MuiAccordionSummary-content": {
                margin: "6px 0"
              }
            },
            ".MuiAccordion-root": {
              "&:before": {
                opacity: 0
              }
            }
          }
        }
      }
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          ".MuiButtonGroup-grouped": {
            borderColor: "var(--vb-gray-900)!important"
          }
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 0,
          width: 36,
          height: 20,
          borderRadius: 10,
          backgroundColor: "var(--vb-gray-800)"
        },
        thumb: {
          width: 16,
          height: 16,
          backgroundColor: "var(--vb-gray-600)"
        },
        track: {
          backgroundColor: "var(--vb-gray-800)"
        },
        switchBase: {
          padding: 2,
          "&.Mui-checked": {
            transform: "translateX(16px)",
            ".MuiSwitch-thumb": {
              background: "var(--vb-white)"
            }
          },
          "&.Mui-disabled .MuiSwitch-thumb": {
            backgroundColor: "var(--vb-gray-600)"
          },
          "&.Mui-checked + .MuiSwitch-track": {
            opacity: 1,
            backgroundColor: "var(--vb-primary-600)"
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          height: 44,
          fontSize: 14,
          fieldset: {
            borderWidth: "1px!important"
          },
          "&.MuiInputBase-multiline": {
            height: "auto",
            minHeight: 48
          },
          "&.Mui-disabled": {
            background: "var(--vb-surface-4)",
            ".Mui-disabled": {
              color: "var(--vb-gray-700)",
              WebkitTextFillColor: "var(--vb-gray-700)"
            },
            fieldset: {
              borderColor: "var(--vb-gray-800)"
            }
          },
          ".MuiInputAdornment-root svg": {
            color: "var(--vb-gray-500)"
          },
          "&.Mui-focused": {
            ".MuiInputAdornment-root svg": {
              color: "var(--vb-white)"
            }
          }
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: "rgba(25, 28, 28, 0.7)"
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "var(--vb-gray-800)"
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: "var(--vb-surface-3)"
        }
      }
    }
  }
}