var games = {
    pong:[
                0x22,0xfc,0x6b,0xc,0x6c,0x3f,0x6d,0xc,0xa2,0xea,0xda,0xb6,0xdc,0xd6,0x6e,0x0,0x22,0xd4,0x66,0x3,0x68,
                0x2,0x60,0x60,0xf0,0x15,0xf0,0x7,0x30,0x0,0x12,0x1a,0xc7,0x17,0x77,0x8,0x69,0xff,0xa2,0xf0,0xd6,
                0x71,0xa2,0xea,0xda,0xb6,0xdc,0xd6,0x60,0x1,0xe0,0xa1,0x7b,0xfe,0x60,0x4,0xe0,0xa1,0x7b,0x2,0x60,
                0x1f,0x8b,0x2,0xda,0xb6,0x60,0xc,0xe0,0xa1,0x7d,0xfe,0x60,0xd,0xe0,0xa1,0x7d,0x2,0x60,0x1f,0x8d,
                0x2,0xdc,0xd6,0xa2,0xf0,0xd6,0x71,0x86,0x84,0x87,0x94,0x60,0x3f,0x86,0x2,0x61,0x1f,0x87,0x12,0x46,
                0x0,0x12,0x78,0x46,0x3f,0x12,0x82,0x47,0x1f,0x69,0xff,0x47,0x0,0x69,0x1,0xd6,0x71,0x12,0x2a,0x68,
                0x2,0x63,0x1,0x80,0x70,0x80,0xb5,0x12,0x8a,0x68,0xfe,0x63,0xa,0x80,0x70,0x80,0xd5,0x3f,0x1,0x12,
                0xa2,0x61,0x2,0x80,0x15,0x3f,0x1,0x12,0xba,0x80,0x15,0x3f,0x1,0x12,0xc8,0x80,0x15,0x3f,0x1,0x12,
                0xc2,0x60,0x20,0xf0,0x18,0x22,0xd4,0x8e,0x34,0x22,0xd4,0x66,0x3e,0x33,0x1,0x66,0x3,0x68,0xfe,0x33,
                0x1,0x68,0x2,0x12,0x16,0x79,0xff,0x49,0xfe,0x69,0xff,0x12,0xc8,0x79,0x1,0x49,0x2,0x69,0x1,0x60,
                0x4,0xf0,0x18,0x76,0x1,0x46,0x40,0x76,0xfe,0x12,0x6c,0xa2,0xf2,0xfe,0x33,0xf2,0x65,0xf1,0x29,0x64,
                0x14,0x65,0x2,0xd4,0x55,0x74,0x15,0xf2,0x29,0xd4,0x55,0x0,0xee,0x80,0x80,0x80,0x80,0x80,0x80,0x80,
                0x0,0x0,0x0,0x0,0x0,0xc0,0xc0,0xc0,0x0,0xff,0x0,0x6b,0x20,0x6c,0x0,0xa2,0xf6,0xdb,0xc4,0x7c,
                0x4,0x3c,0x20,0x13,0x2,0x6a,0x0,0x6b,0x0,0x6c,0x1f,0xa2,0xfa,0xda,0xb1,0xda,0xc1,0x7a,0x8,0x3a,
                0x40,0x13,0x12,0xa2,0xf6,0x6a,0x0,0x6b,0x20,0xdb,0xa1,0x0,0xee
    ],
    invaders:[
                0x12,0x25,0x53,0x50,0x41,0x43,0x45,0x20,0x49,0x4e,0x56,0x41,0x44,0x45,0x52,0x53,0x20,0x30,0x2e,0x39,0x31,
                0x20,0x42,0x79,0x20,0x44,0x61,0x76,0x69,0x64,0x20,0x57,0x49,0x4e,0x54,0x45,0x52,0x60,0x0,0x61,0x0,
                0x62,0x8,0xa3,0xdd,0xd0,0x18,0x71,0x8,0xf2,0x1e,0x31,0x20,0x12,0x2d,0x70,0x8,0x61,0x0,0x30,0x40,
                0x12,0x2d,0x69,0x5,0x6c,0x15,0x6e,0x0,0x23,0x91,0x60,0xa,0xf0,0x15,0xf0,0x7,0x30,0x0,0x12,0x4b,
                0x23,0x91,0x7e,0x1,0x12,0x45,0x66,0x0,0x68,0x1c,0x69,0x0,0x6a,0x4,0x6b,0xa,0x6c,0x4,0x6d,0x3c,
                0x6e,0xf,0x0,0xe0,0x23,0x75,0x23,0x51,0xfd,0x15,0x60,0x4,0xe0,0x9e,0x12,0x7d,0x23,0x75,0x38,0x0,
                0x78,0xff,0x23,0x75,0x60,0x6,0xe0,0x9e,0x12,0x8b,0x23,0x75,0x38,0x39,0x78,0x1,0x23,0x75,0x36,0x0,
                0x12,0x9f,0x60,0x5,0xe0,0x9e,0x12,0xe9,0x66,0x1,0x65,0x1b,0x84,0x80,0xa3,0xd9,0xd4,0x51,0xa3,0xd9,
                0xd4,0x51,0x75,0xff,0x35,0xff,0x12,0xad,0x66,0x0,0x12,0xe9,0xd4,0x51,0x3f,0x1,0x12,0xe9,0xd4,0x51,
                0x66,0x0,0x83,0x40,0x73,0x3,0x83,0xb5,0x62,0xf8,0x83,0x22,0x62,0x8,0x33,0x0,0x12,0xc9,0x23,0x7d,
                0x82,0x6,0x43,0x8,0x12,0xd3,0x33,0x10,0x12,0xd5,0x23,0x7d,0x82,0x6,0x33,0x18,0x12,0xdd,0x23,0x7d,
                0x82,0x6,0x43,0x20,0x12,0xe7,0x33,0x28,0x12,0xe9,0x23,0x7d,0x3e,0x0,0x13,0x7,0x79,0x6,0x49,0x18,
                0x69,0x0,0x6a,0x4,0x6b,0xa,0x6c,0x4,0x7d,0xf4,0x6e,0xf,0x0,0xe0,0x23,0x51,0x23,0x75,0xfd,0x15,
                0x12,0x6f,0xf7,0x7,0x37,0x0,0x12,0x6f,0xfd,0x15,0x23,0x51,0x8b,0xa4,0x3b,0x12,0x13,0x1b,0x7c,0x2,
                0x6a,0xfc,0x3b,0x2,0x13,0x23,0x7c,0x2,0x6a,0x4,0x23,0x51,0x3c,0x18,0x12,0x6f,0x0,0xe0,0xa4,0xdd,
                0x60,0x14,0x61,0x8,0x62,0xf,0xd0,0x1f,0x70,0x8,0xf2,0x1e,0x30,0x2c,0x13,0x33,0x60,0xff,0xf0,0x15,
                0xf0,0x7,0x30,0x0,0x13,0x41,0xf0,0xa,0x0,0xe0,0xa7,0x6,0xfe,0x65,0x12,0x25,0xa3,0xc1,0xf9,0x1e,
                0x61,0x8,0x23,0x69,0x81,0x6,0x23,0x69,0x81,0x6,0x23,0x69,0x81,0x6,0x23,0x69,0x7b,0xd0,0x0,0xee,
                0x80,0xe0,0x80,0x12,0x30,0x0,0xdb,0xc6,0x7b,0xc,0x0,0xee,0xa3,0xd9,0x60,0x1c,0xd8,0x4,0x0,0xee,
                0x23,0x51,0x8e,0x23,0x23,0x51,0x60,0x5,0xf0,0x18,0xf0,0x15,0xf0,0x7,0x30,0x0,0x13,0x89,0x0,0xee,
                0x6a,0x0,0x8d,0xe0,0x6b,0x4,0xe9,0xa1,0x12,0x57,0xa6,0xc,0xfd,0x1e,0xf0,0x65,0x30,0xff,0x13,0xaf,
                0x6a,0x0,0x6b,0x4,0x6d,0x1,0x6e,0x1,0x13,0x97,0xa5,0xa,0xf0,0x1e,0xdb,0xc6,0x7b,0x8,0x7d,0x1,
                0x7a,0x1,0x3a,0x7,0x13,0x97,0x0,0xee,0x3c,0x7e,0xff,0xff,0x99,0x99,0x7e,0xff,0xff,0x24,0x24,0xe7,
                0x7e,0xff,0x3c,0x3c,0x7e,0xdb,0x81,0x42,0x3c,0x7e,0xff,0xdb,0x10,0x38,0x7c,0xfe,0x0,0x0,0x7f,0x0,
                0x3f,0x0,0x7f,0x0,0x0,0x0,0x1,0x1,0x1,0x3,0x3,0x3,0x3,0x0,0x0,0x3f,0x20,0x20,0x20,0x20,
                0x20,0x20,0x20,0x20,0x3f,0x8,0x8,0xff,0x0,0x0,0xfe,0x0,0xfc,0x0,0xfe,0x0,0x0,0x0,0x7e,0x42,
                0x42,0x62,0x62,0x62,0x62,0x0,0x0,0xff,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0xff,0x0,0x0,0xff,
                0x0,0x7d,0x0,0x41,0x7d,0x5,0x7d,0x7d,0x0,0x0,0xc2,0xc2,0xc6,0x44,0x6c,0x28,0x38,0x0,0x0,0xff,
                0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0xff,0x0,0x0,0xff,0x0,0xf7,0x10,0x14,0xf7,0xf7,0x4,0x4,
                0x0,0x0,0x7c,0x44,0xfe,0xc2,0xc2,0xc2,0xc2,0x0,0x0,0xff,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,
                0xff,0x0,0x0,0xff,0x0,0xef,0x20,0x28,0xe8,0xe8,0x2f,0x2f,0x0,0x0,0xf9,0x85,0xc5,0xc5,0xc5,0xc5,
                0xf9,0x0,0x0,0xff,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0xff,0x0,0x0,0xff,0x0,0xbe,0x0,0x20,
                0x30,0x20,0xbe,0xbe,0x0,0x0,0xf7,0x4,0xe7,0x85,0x85,0x84,0xf4,0x0,0x0,0xff,0x0,0x0,0x0,0x0,
                0x0,0x0,0x0,0x0,0xff,0x0,0x0,0xff,0x0,0x0,0x7f,0x0,0x3f,0x0,0x7f,0x0,0x0,0x0,0xef,0x28,
                0xef,0x0,0xe0,0x60,0x6f,0x0,0x0,0xff,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0xff,0x0,0x0,0xff,
                0x0,0x0,0xfe,0x0,0xfc,0x0,0xfe,0x0,0x0,0x0,0xc0,0x0,0xc0,0xc0,0xc0,0xc0,0xc0,0x0,0x0,0xfc,
                0x4,0x4,0x4,0x4,0x4,0x4,0x4,0x4,0xfc,0x10,0x10,0xff,0xf9,0x81,0xb9,0x8b,0x9a,0x9a,0xfa,0x0,
                0xfa,0x8a,0x9a,0x9a,0x9b,0x99,0xf8,0xe6,0x25,0x25,0xf4,0x34,0x34,0x34,0x0,0x17,0x14,0x34,0x37,0x36,
                0x26,0xc7,0xdf,0x50,0x50,0x5c,0xd8,0xd8,0xdf,0x0,0xdf,0x11,0x1f,0x12,0x1b,0x19,0xd9,0x7c,0x44,0xfe,
                0x86,0x86,0x86,0xfc,0x84,0xfe,0x82,0x82,0xfe,0xfe,0x80,0xc0,0xc0,0xc0,0xfe,0xfc,0x82,0xc2,0xc2,0xc2,
                0xfc,0xfe,0x80,0xf8,0xc0,0xc0,0xfe,0xfe,0x80,0xf0,0xc0,0xc0,0xc0,0xfe,0x80,0xbe,0x86,0x86,0xfe,0x86,
                0x86,0xfe,0x86,0x86,0x86,0x10,0x10,0x10,0x10,0x10,0x10,0x18,0x18,0x18,0x48,0x48,0x78,0x9c,0x90,0xb0,
                0xc0,0xb0,0x9c,0x80,0x80,0xc0,0xc0,0xc0,0xfe,0xee,0x92,0x92,0x86,0x86,0x86,0xfe,0x82,0x86,0x86,0x86,
                0x86,0x7c,0x82,0x86,0x86,0x86,0x7c,0xfe,0x82,0xfe,0xc0,0xc0,0xc0,0x7c,0x82,0xc2,0xca,0xc4,0x7a,0xfe,
                0x86,0xfe,0x90,0x9c,0x84,0xfe,0xc0,0xfe,0x2,0x2,0xfe,0xfe,0x10,0x30,0x30,0x30,0x30,0x82,0x82,0xc2,
                0xc2,0xc2,0xfe,0x82,0x82,0x82,0xee,0x38,0x10,0x86,0x86,0x96,0x92,0x92,0xee,0x82,0x44,0x38,0x38,0x44,
                0x82,0x82,0x82,0xfe,0x30,0x30,0x30,0xfe,0x2,0x1e,0xf0,0x80,0xfe,0x0,0x0,0x0,0x0,0x6,0x6,0x0,
                0x0,0x0,0x60,0x60,0xc0,0x0,0x0,0x0,0x0,0x0,0x0,0x18,0x18,0x18,0x18,0x0,0x18,0x7c,0xc6,0xc,
                0x18,0x0,0x18,0x0,0x0,0xfe,0xfe,0x0,0x0,0xfe,0x82,0x86,0x86,0x86,0xfe,0x8,0x8,0x8,0x18,0x18,
                0x18,0xfe,0x2,0xfe,0xc0,0xc0,0xfe,0xfe,0x2,0x1e,0x6,0x6,0xfe,0x84,0xc4,0xc4,0xfe,0x4,0x4,0xfe,
                0x80,0xfe,0x6,0x6,0xfe,0xc0,0xc0,0xc0,0xfe,0x82,0xfe,0xfe,0x2,0x2,0x6,0x6,0x6,0x7c,0x44,0xfe,
                0x86,0x86,0xfe,0xfe,0x82,0xfe,0x6,0x6,0x6,0x44,0xfe,0x44,0x44,0xfe,0x44,0xa8,0xa8,0xa8,0xa8,0xa8,
                0xa8,0xa8,0x6c,0x5a,0x0,0xc,0x18,0xa8,0x30,0x4e,0x7e,0x0,0x12,0x18,0x66,0x6c,0xa8,0x5a,0x66,0x54,
                0x24,0x66,0x0,0x48,0x48,0x18,0x12,0xa8,0x6,0x90,0xa8,0x12,0x0,0x7e,0x30,0x12,0xa8,0x84,0x30,0x4e,
                0x72,0x18,0x66,0xa8,0xa8,0xa8,0xa8,0xa8,0xa8,0x90,0x54,0x78,0xa8,0x48,0x78,0x6c,0x72,0xa8,0x12,0x18,
                0x6c,0x72,0x66,0x54,0x90,0xa8,0x72,0x2a,0x18,0xa8,0x30,0x4e,0x7e,0x0,0x12,0x18,0x66,0x6c,0xa8,0x72,
                0x54,0xa8,0x5a,0x66,0x18,0x7e,0x18,0x4e,0x72,0xa8,0x72,0x2a,0x18,0x30,0x66,0xa8,0x30,0x4e,0x7e,0x0,
                0x6c,0x30,0x54,0x4e,0x9c,0xa8,0xa8,0xa8,0xa8,0xa8,0xa8,0xa8,0x48,0x54,0x7e,0x18,0xa8,0x90,0x54,0x78,
                0x66,0xa8,0x6c,0x2a,0x30,0x5a,0xa8,0x84,0x30,0x72,0x2a,0xa8,0xd8,0xa8,0x0,0x4e,0x12,0xa8,0xe4,0xa2,
                0xa8,0x0,0x4e,0x12,0xa8,0x6c,0x2a,0x54,0x54,0x72,0xa8,0x84,0x30,0x72,0x2a,0xa8,0xde,0x9c,0xa8,0x72,
                0x2a,0x18,0xa8,0xc,0x54,0x48,0x5a,0x78,0x72,0x18,0x66,0xa8,0x66,0x18,0x5a,0x54,0x66,0x72,0x6c,0xa8,
                0x72,0x2a,0x0,0x72,0xa8,0x72,0x2a,0x18,0xa8,0x30,0x4e,0x7e,0x0,0x12,0x18,0x66,0x6c,0xa8,0x0,0x66,
                0x18,0xa8,0x30,0x4e,0xc,0x66,0x18,0x0,0x6c,0x30,0x4e,0x24,0xa8,0x72,0x2a,0x18,0x30,0x66,0xa8,0x1e,
                0x54,0x66,0xc,0x18,0x9c,0xa8,0x24,0x54,0x54,0x12,0xa8,0x42,0x78,0xc,0x3c,0xa8,0xae,0xa8,0xa8,0xa8,
                0xa8,0xa8,0xa8,0xa8,0xff,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0
    ],
    tetris:[
                0xa2,0xb4,0x23,0xe6,0x22,0xb6,0x70,0x1,0xd0,0x11,0x30,0x25,0x12,0x6,0x71,0xff,0xd0,0x11,0x60,0x1a,0xd0,
                0x11,0x60,0x25,0x31,0x0,0x12,0xe,0xc4,0x70,0x44,0x70,0x12,0x1c,0xc3,0x3,0x60,0x1e,0x61,0x3,0x22,
                0x5c,0xf5,0x15,0xd0,0x14,0x3f,0x1,0x12,0x3c,0xd0,0x14,0x71,0xff,0xd0,0x14,0x23,0x40,0x12,0x1c,0xe7,
                0xa1,0x22,0x72,0xe8,0xa1,0x22,0x84,0xe9,0xa1,0x22,0x96,0xe2,0x9e,0x12,0x50,0x66,0x0,0xf6,0x15,0xf6,
                0x7,0x36,0x0,0x12,0x3c,0xd0,0x14,0x71,0x1,0x12,0x2a,0xa2,0xc4,0xf4,0x1e,0x66,0x0,0x43,0x1,0x66,
                0x4,0x43,0x2,0x66,0x8,0x43,0x3,0x66,0xc,0xf6,0x1e,0x0,0xee,0xd0,0x14,0x70,0xff,0x23,0x34,0x3f,
                0x1,0x0,0xee,0xd0,0x14,0x70,0x1,0x23,0x34,0x0,0xee,0xd0,0x14,0x70,0x1,0x23,0x34,0x3f,0x1,0x0,
                0xee,0xd0,0x14,0x70,0xff,0x23,0x34,0x0,0xee,0xd0,0x14,0x73,0x1,0x43,0x4,0x63,0x0,0x22,0x5c,0x23,
                0x34,0x3f,0x1,0x0,0xee,0xd0,0x14,0x73,0xff,0x43,0xff,0x63,0x3,0x22,0x5c,0x23,0x34,0x0,0xee,0x80,
                0x0,0x67,0x5,0x68,0x6,0x69,0x4,0x61,0x1f,0x65,0x10,0x62,0x7,0x0,0xee,0x40,0xe0,0x0,0x0,0x40,
                0xc0,0x40,0x0,0x0,0xe0,0x40,0x0,0x40,0x60,0x40,0x0,0x40,0x40,0x60,0x0,0x20,0xe0,0x0,0x0,0xc0,
                0x40,0x40,0x0,0x0,0xe0,0x80,0x0,0x40,0x40,0xc0,0x0,0x0,0xe0,0x20,0x0,0x60,0x40,0x40,0x0,0x80,
                0xe0,0x0,0x0,0x40,0xc0,0x80,0x0,0xc0,0x60,0x0,0x0,0x40,0xc0,0x80,0x0,0xc0,0x60,0x0,0x0,0x80,
                0xc0,0x40,0x0,0x0,0x60,0xc0,0x0,0x80,0xc0,0x40,0x0,0x0,0x60,0xc0,0x0,0xc0,0xc0,0x0,0x0,0xc0,
                0xc0,0x0,0x0,0xc0,0xc0,0x0,0x0,0xc0,0xc0,0x0,0x0,0x40,0x40,0x40,0x40,0x0,0xf0,0x0,0x0,0x40,
                0x40,0x40,0x40,0x0,0xf0,0x0,0x0,0xd0,0x14,0x66,0x35,0x76,0xff,0x36,0x0,0x13,0x38,0x0,0xee,0xa2,
                0xb4,0x8c,0x10,0x3c,0x1e,0x7c,0x1,0x3c,0x1e,0x7c,0x1,0x3c,0x1e,0x7c,0x1,0x23,0x5e,0x4b,0xa,0x23,
                0x72,0x91,0xc0,0x0,0xee,0x71,0x1,0x13,0x50,0x60,0x1b,0x6b,0x0,0xd0,0x11,0x3f,0x0,0x7b,0x1,0xd0,
                0x11,0x70,0x1,0x30,0x25,0x13,0x62,0x0,0xee,0x60,0x1b,0xd0,0x11,0x70,0x1,0x30,0x25,0x13,0x74,0x8e,
                0x10,0x8d,0xe0,0x7e,0xff,0x60,0x1b,0x6b,0x0,0xd0,0xe1,0x3f,0x0,0x13,0x90,0xd0,0xe1,0x13,0x94,0xd0,
                0xd1,0x7b,0x1,0x70,0x1,0x30,0x25,0x13,0x86,0x4b,0x0,0x13,0xa6,0x7d,0xff,0x7e,0xff,0x3d,0x1,0x13,
                0x82,0x23,0xc0,0x3f,0x1,0x23,0xc0,0x7a,0x1,0x23,0xc0,0x80,0xa0,0x6d,0x7,0x80,0xd2,0x40,0x4,0x75,
                0xfe,0x45,0x2,0x65,0x4,0x0,0xee,0xa7,0x0,0xf2,0x55,0xa8,0x4,0xfa,0x33,0xf2,0x65,0xf0,0x29,0x6d,
                0x32,0x6e,0x0,0xdd,0xe5,0x7d,0x5,0xf1,0x29,0xdd,0xe5,0x7d,0x5,0xf2,0x29,0xdd,0xe5,0xa7,0x0,0xf2,
                0x65,0xa2,0xb4,0x0,0xee,0x6a,0x0,0x60,0x19,0x0,0xee,0x37,0x23
    ],
    kaleid:[
                0x60,0x0,0x63,0x80,0x61,0x1f,0x62,0xf,0x22,0x32,0xa2,0x0,0xf3,0x1e,0xf0,0xa,0xf0,0x55,0x40,0x0,0x12,
                0x1c,0x73,0x1,0x33,0x0,0x12,0x8,0x63,0x80,0xa2,0x0,0xf3,0x1e,0xf0,0x65,0x40,0x0,0x12,0x1c,0x73,
                0x1,0x43,0x0,0x12,0x1c,0x22,0x32,0x12,0x1e,0x40,0x2,0x72,0xff,0x40,0x4,0x71,0xff,0x40,0x6,0x71,
                0x1,0x40,0x8,0x72,0x1,0xa2,0x77,0x6a,0xe0,0x8a,0x12,0x6b,0x1f,0x81,0xb2,0x3a,0x0,0x72,0x1,0x6a,
                0xf0,0x8a,0x22,0x6b,0xf,0x82,0xb2,0x3a,0x0,0x71,0x1,0x6b,0x1f,0x81,0xb2,0xd1,0x21,0x8a,0x10,0x6b,
                0x1f,0x8b,0x25,0xda,0xb1,0x6a,0x3f,0x8a,0x15,0xda,0xb1,0x8b,0x20,0xda,0xb1,0x0,0xee,0x1,0x80
    ],
    brix:[
                0x6e,0x5,0x65,0x0,0x6b,0x6,0x6a,0x0,0xa3,0xc,0xda,0xb1,0x7a,0x4,0x3a,0x40,0x12,0x8,0x7b,0x2,0x3b,
                0x12,0x12,0x6,0x6c,0x20,0x6d,0x1f,0xa3,0x10,0xdc,0xd1,0x22,0xf6,0x60,0x0,0x61,0x0,0xa3,0x12,0xd0,
                0x11,0x70,0x8,0xa3,0xe,0xd0,0x11,0x60,0x40,0xf0,0x15,0xf0,0x7,0x30,0x0,0x12,0x34,0xc6,0xf,0x67,
                0x1e,0x68,0x1,0x69,0xff,0xa3,0xe,0xd6,0x71,0xa3,0x10,0xdc,0xd1,0x60,0x4,0xe0,0xa1,0x7c,0xfe,0x60,
                0x6,0xe0,0xa1,0x7c,0x2,0x60,0x3f,0x8c,0x2,0xdc,0xd1,0xa3,0xe,0xd6,0x71,0x86,0x84,0x87,0x94,0x60,
                0x3f,0x86,0x2,0x61,0x1f,0x87,0x12,0x47,0x1f,0x12,0xac,0x46,0x0,0x68,0x1,0x46,0x3f,0x68,0xff,0x47,
                0x0,0x69,0x1,0xd6,0x71,0x3f,0x1,0x12,0xaa,0x47,0x1f,0x12,0xaa,0x60,0x5,0x80,0x75,0x3f,0x0,0x12,
                0xaa,0x60,0x1,0xf0,0x18,0x80,0x60,0x61,0xfc,0x80,0x12,0xa3,0xc,0xd0,0x71,0x60,0xfe,0x89,0x3,0x22,
                0xf6,0x75,0x1,0x22,0xf6,0x45,0x60,0x12,0xde,0x12,0x46,0x69,0xff,0x80,0x60,0x80,0xc5,0x3f,0x1,0x12,
                0xca,0x61,0x2,0x80,0x15,0x3f,0x1,0x12,0xe0,0x80,0x15,0x3f,0x1,0x12,0xee,0x80,0x15,0x3f,0x1,0x12,
                0xe8,0x60,0x20,0xf0,0x18,0xa3,0xe,0x7e,0xff,0x80,0xe0,0x80,0x4,0x61,0x0,0xd0,0x11,0x3e,0x0,0x12,
                0x30,0x12,0xde,0x78,0xff,0x48,0xfe,0x68,0xff,0x12,0xee,0x78,0x1,0x48,0x2,0x68,0x1,0x60,0x4,0xf0,
                0x18,0x69,0xff,0x12,0x70,0xa3,0x14,0xf5,0x33,0xf2,0x65,0xf1,0x29,0x63,0x37,0x64,0x0,0xd3,0x45,0x73,
                0x5,0xf2,0x29,0xd3,0x45,0x0,0xee,0xe0,0x0,0x80,0x0,0xfc,0x0,0xaa,0x0,0x0,0x0,0x0,0x0
    ],
    maze:[
                0x60,0x0,0x61,0x0,0xa2,0x22,0xc2,0x1,0x32,0x1,0xa2,0x1e,0xd0,0x14,0x70,0x4,0x30,0x40,0x12,0x4,0x60,
                0x0,0x71,0x4,0x31,0x20,0x12,0x4,0x12,0x1c,0x80,0x40,0x20,0x10,0x20,0x40,0x80,0x10
    ],
    vbrix:[
                0x0,0xe0,0x23,0xb6,0x60,0x7,0xe0,0x9e,0x12,0x4,0x68,0x0,0x67,0x3,0x23,0x46,0x22,0x4a,0x22,0xc0,0x23,
                0x66,0x23,0x8a,0x23,0xac,0xf0,0xa,0x22,0x5a,0x22,0x5a,0x22,0xd0,0x22,0x88,0x3a,0x0,0x12,0x1c,0x6c,
                0x1,0x23,0xac,0x77,0xff,0x23,0xac,0x60,0x78,0xf0,0x15,0xf0,0x7,0x30,0x0,0x12,0x34,0x37,0x0,0x12,
                0x1c,0x23,0xac,0x60,0x7,0xe0,0x9e,0x12,0x42,0x12,0xa,0x0,0xfd,0x69,0x10,0x60,0x2,0xa2,0x54,0xd0,
                0x95,0x0,0xee,0x80,0x80,0x80,0x80,0x80,0x0,0x60,0x1,0xe0,0xa1,0x12,0x68,0x60,0x4,0xe0,0xa1,0x12,
                0x72,0x0,0xee,0x80,0x90,0x70,0xff,0x40,0x0,0x0,0xee,0x12,0x7c,0x80,0x90,0x70,0x1,0x40,0x1b,0x0,
                0xee,0x12,0x7c,0x61,0x2,0xa2,0x54,0xd1,0x95,0xd1,0x5,0x89,0x0,0x0,0xee,0x80,0xa0,0x70,0xfe,0x30,
                0x0,0x0,0xee,0x80,0xb0,0x80,0x95,0x4f,0x0,0x0,0xee,0x81,0x0,0x62,0x5,0x81,0x25,0x3f,0x0,0x0,
                0xee,0xa2,0xba,0xf0,0x1e,0xf0,0x65,0x8d,0x0,0x4b,0x1,0x6d,0x1,0x4b,0x1e,0x6d,0xff,0x6c,0x1,0x60,
                0xa,0xf0,0x18,0x0,0xee,0xff,0xff,0x0,0x1,0x1,0x0,0xcb,0x20,0x7b,0x1,0x6a,0x4,0x6c,0x1,0x6d,
                0x1,0xa3,0x64,0xda,0xb1,0x0,0xee,0x80,0xa0,0x81,0xb0,0x8a,0xc4,0x8b,0xd4,0xa3,0x64,0x4b,0x1,0x6d,
                0x1,0x4b,0x1e,0x6d,0xff,0x4a,0x3e,0x6c,0xff,0x4a,0x0,0x6c,0x1,0xd0,0x11,0xda,0xb1,0x4f,0x0,0x0,
                0xee,0x80,0xa0,0x61,0x21,0x80,0x15,0x4f,0x0,0x0,0xee,0x80,0xa0,0x81,0xb0,0x70,0xde,0x71,0xff,0x62,
                0xff,0x63,0xff,0x64,0x3,0x72,0x1,0x80,0x45,0x3f,0x0,0x13,0xa,0x73,0x1,0x81,0x45,0x3f,0x0,0x13,
                0x12,0x80,0x20,0x81,0x30,0x80,0x24,0x80,0x24,0x81,0x34,0x81,0x34,0x70,0x22,0x71,0x1,0xa3,0x86,0xd0,
                0x13,0x7e,0xff,0x60,0x0,0x8c,0x7,0x60,0x2,0xf0,0x18,0x23,0x8a,0x78,0x1,0x23,0x8a,0x3e,0x0,0x0,
                0xee,0x23,0x66,0x0,0xee,0x0,0xe0,0x60,0x0,0x61,0x0,0x62,0x1f,0xa3,0x64,0xd0,0x11,0xd0,0x21,0x70,
                0x1,0x30,0x3f,0x13,0x50,0xd0,0x11,0x71,0x1,0x31,0x20,0x13,0x5a,0x0,0xee,0x80,0x0,0x61,0x1,0x63,
                0xa,0xa3,0x86,0x60,0x22,0x62,0x7,0xd0,0x13,0x70,0x3,0x72,0xff,0x32,0x0,0x13,0x70,0x71,0x3,0x73,
                0xff,0x33,0x0,0x13,0x6c,0x6e,0x46,0x0,0xee,0xe0,0xa0,0xe0,0x0,0xa3,0xa6,0xf8,0x33,0xf2,0x65,0x63,
                0x3,0x64,0x2,0xf0,0x29,0xd3,0x45,0x73,0x5,0xf1,0x29,0xd3,0x45,0x73,0x5,0xf2,0x29,0xd3,0x45,0x0,
                0xee,0x0,0x0,0x0,0x0,0x0,0x0,0x60,0x14,0x61,0x2,0xf7,0x29,0xd0,0x15,0x0,0xee,0x60,0xa,0x61,
                0xc,0x62,0x9,0x63,0x5,0xa3,0xce,0xd0,0x15,0xf3,0x1e,0x70,0x5,0x72,0xff,0x32,0x0,0x13,0xc0,0x0,
                0xee,0x90,0x90,0x90,0x90,0x60,0xe0,0x90,0xe0,0x90,0xe0,0xe0,0x90,0xe0,0x90,0x90,0x20,0x20,0x20,0x20,
                0x20,0x90,0x90,0x60,0x90,0x90,0x0,0x0,0x60,0x0,0x0,0xf0,0x90,0xf0,0x80,0x80,0xf0,0x80,0xf0,0x10,
                0xf0,0xe0,0x90,0xe0,0x90,0x90
    ]


};
