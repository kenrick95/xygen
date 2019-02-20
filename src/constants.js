// @ts-check
export const COLORS = {
  WHITE: "#ffffff",
  BLACK: "#000003",
  GREY: "#8b8c8e",
  RED: "#ee2927",
  ORANGE: "#f4792d",
  YELLOW: "#ffd005",
  GREEN: "#008942",
  BLUE: "#005dac",
  PURPLE: "#561d79",
  NONE: "transparent"
}

export const SEP_COLOR = {
  ACTIVE: "#f12928",
  INACTIVE: "#47555d"
}

const SHIFT = [
  [COLORS.BLACK, COLORS.GREY],
  [COLORS.GREY, COLORS.WHITE],
  [COLORS.NONE, COLORS.NONE],
  [COLORS.YELLOW, COLORS.GREEN],
  [COLORS.GREEN, COLORS.BLUE]
]

export const COLDPLAY_MAP = [
  [
    "A",
    [
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    "B",
    [
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.YELLOW, COLORS.GREEN],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  [
    "C",
    [
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.ORANGE, COLORS.YELLOW],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    "D",
    [
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.YELLOW, COLORS.GREEN],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    "E",
    [
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    "F",
    [
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.ORANGE, COLORS.YELLOW],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    "G",
    [
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.YELLOW, COLORS.GREEN],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  [
    "H",
    [
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.RED, COLORS.PURPLE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.PURPLE, COLORS.BLUE]
      ]
    ]
  ],
  [
    "I",
    [
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    "J",
    [
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.YELLOW, COLORS.GREEN],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    "K",
    [
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.ORANGE, COLORS.YELLOW],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    "L",
    [
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  [
    "M",
    [
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.ORANGE, COLORS.GREEN],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  [
    "N",
    [
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.ORANGE, COLORS.YELLOW],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    "O",
    [
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.YELLOW, COLORS.GREEN],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  [
    "P",
    [
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.RED, COLORS.PURPLE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.PURPLE, COLORS.BLUE]
      ]
    ]
  ],
  [
    "Q",
    [
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.RED, COLORS.PURPLE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.PURPLE, COLORS.BLUE]
      ]
    ]
  ],
  [
    "R",
    [
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.YELLOW, COLORS.GREEN],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    "S",
    [
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    "T",
    [
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  [
    "U",
    [
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    "V",
    [
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.ORANGE, COLORS.GREEN],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  [
    "W",
    [
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  [
    "X",
    [
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.ORANGE, COLORS.GREEN],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  [
    "Y",
    [
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.RED, COLORS.PURPLE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.PURPLE, COLORS.BLUE]
      ]
    ]
  ],
  [
    "Z",
    [
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  [
    "1",
    [
      SHIFT,
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.PURPLE, COLORS.BLUE]
      ]
    ]
  ],
  [
    "2",
    [
      SHIFT,
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  [
    "3",
    [
      SHIFT,
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    "4",
    [
      SHIFT,
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.YELLOW, COLORS.GREEN],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    "5",
    [
      SHIFT,
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  [
    "6",
    [
      SHIFT,
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.RED, COLORS.PURPLE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.PURPLE, COLORS.BLUE]
      ]
    ]
  ],
  [
    "7",
    [
      SHIFT,
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    "8",
    [
      SHIFT,
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    "9",
    [
      SHIFT,
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.YELLOW, COLORS.GREEN],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  // Seems impossible...
  //   [
  //     "10",
  //     [
  //       SHIFT,
  //       [
  //         [COLORS.BLACK, COLORS.GREY],
  //         [COLORS.GREY, COLORS.WHITE],
  //         [COLORS.RED, COLORS.PURPLE],
  //         [COLORS.NONE, COLORS.NONE],
  //         [COLORS.PURPLE, COLORS.BLUE]
  //       ],
  //       [
  //         [COLORS.NONE, COLORS.NONE],
  //         [COLORS.GREY, COLORS.WHITE],
  //         [COLORS.RED, COLORS.PURPLE],
  //         [COLORS.NONE, COLORS.NONE],
  //         [COLORS.PURPLE, COLORS.BLUE]
  //       ]
  //     ]
  //   ],
  [
    "(",
    [
      SHIFT,
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.ORANGE, COLORS.YELLOW],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    ")",
    [
      SHIFT,
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  [
    ".",
    [
      SHIFT,
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.ORANGE, COLORS.GREEN],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  [
    "&",
    [
      SHIFT,
      [
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.YELLOW, COLORS.GREEN],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  [
    "?",
    [
      SHIFT,
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.YELLOW, COLORS.GREEN],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  [
    "!",
    [
      SHIFT,
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.ORANGE, COLORS.YELLOW],
        [COLORS.NONE, COLORS.NONE]
      ]
    ]
  ],
  [
    "/",
    [
      SHIFT,
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.NONE, COLORS.NONE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.ORANGE, COLORS.GREEN],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ],
  [
    "",
    [
      SHIFT,
      [
        [COLORS.BLACK, COLORS.GREY],
        [COLORS.GREY, COLORS.WHITE],
        [COLORS.RED, COLORS.ORANGE],
        [COLORS.ORANGE, COLORS.GREEN],
        [COLORS.GREEN, COLORS.BLUE]
      ]
    ]
  ]
]
