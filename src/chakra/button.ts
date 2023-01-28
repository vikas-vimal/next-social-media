import { ComponentStyleConfig } from "@chakra-ui/react";



export const Button: ComponentStyleConfig = {
    baseStyle:{
        borderRadius:"10px",
        color: 'brand.100',
        fontSize: "8pt",
        fontWeight:600,
        _focus:{
            boxShadow:'none'
        }
    },
    sizes:{
        sm:{
            fontSize:'8pt',
        },
        md:{
            fontSize:'11pt',
        },
    },
    variants:{
        solid:{
            color:"brand.200",
            bg:"white",
            boxShadow:'sm',
            border:"1px solid",
            borderColor:"gray.200",
            _hover:{
                color:"brand.200",
                bg:"gray.100"
            },
            _active:{
                color:"brand.400",
                bg:"gray.200",
                boxShadow:'none',
            },
            _focus:{
                bg:"white",
                boxShadow:'sm',
            }
        },
        primary:{
            color:"white",
            bg:"brand.200",
            boxShadow:'sm',
            _hover:{
                bg:"brand.100"
            },
            _active:{
                bg:"brand.500",
                boxShadow:'none',
            },
            _focus:{
                bg:"brand.200",
                boxShadow:'sm',
            }
        },
        outline:{
            bg:"transparent",
            color:"brand.200",
            borderColor:"brand.200",
            _hover:{
                bg:"gray.100"
            },
            _active:{
                color:"white",
                bg:"brand.200",
            },
            _focus:{
                bg:"transparent",
                color:"brand.200",
            }
        },
        special:{
            color:"gray.700",
            border:"1px solid",
            borderColor:"gray.200",
            _hover:{
                bg:"gray.50"
            },
            _active:{
                bg:"gray.200",
            },
            _focus:{
            }
        }
    }
}