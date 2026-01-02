
export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    description?: string;
    specs?: { label: string; value: string }[];
}

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Esp32 Devkit",
        price: 14.50,
        category: "Microcontrollers",
        image: "https://ts2.mm.bing.net/th?id=OIP.BQFvOy26pCoLLcwsGlnLsAHaHa&pid=15.1",
        description: "The ESP32 is an MCU with 2.4 GHz Wi-Fi and Bluetooth 5 (LE) built-in, supporting diverse AI workloads.",
        specs: [
            { label: "Core", value: "Xtensa® 32-bit LX7 Dual-Core" },
            { label: "Clock", value: "Up to 240 MHz" },
            { label: "Flash", value: "8 MB SPI" },
            { label: "PSRAM", value: "2 MB" }
        ]
    },
    {
        id: 2,
        name: "Raspberry Pi 5 - 8GB RAM",
        price: 85.00,
        category: "Microcontrollers",
        image: "https://ts3.mm.bing.net/th?id=OIP.TeHEG0kTmuttckxLpFer-AHaHa&pid=15.1",
        description: "The latest iteration of the Raspberry Pi computer. Featuring a 64-bit quad-core Arm Cortex-A76 processor running at 2.4GHz.",
        specs: [
            { label: "CPU", value: "Broadcom BCM2712 2.4GHz Quad-Core" },
            { label: "RAM", value: "8GB LPDDR4X" },
            { label: "Connectivity", value: "WiFi 802.11ac, BT 5.0" }
        ]
    },
    {
        id: 3,
        name: "MPU-6050 6-Axis Gyroscope",
        price: 4.50,
        category: "Sensors",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYfIsNHBEDNHDXwqjIoGbGuaybY6LF2fDUew&s",
        description: "The MPU-6050 devices combine a 3-axis gyroscope and a 3-axis accelerometer on the same silicon die.",
        specs: [
            { label: "Gyro Range", value: "±250 to ±2000 °/s" },
            { label: "Accel Range", value: "±2g to ±16g" },
            { label: "Communication", value: "I2C" }
        ]
    },
    {
        id: 4,
        name: "BME280 Environmental Sensor",
        price: 8.95,
        category: "Sensors",
        image: "data:image/jpeg;base64,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",
        description: "Integrated environmental sensor specifically developed for mobile applications where size and low power consumption are key.",
        specs: [
            { label: "Temperature", value: "-40 to +85°C" },
            { label: "Pressure", value: "300 to 1100 hPa" },
            { label: "Humidity", value: "0 to 100%" }
        ]
    },
    {
        id: 5,
        name: "Arduino Uno R4 WiFi",
        price: 27.50,
        category: "Microcontrollers",
        image: "https://ts1.mm.bing.net/th?id=OIP.7A-_GBRNX81tW7MKyot2AQHaHa&pid=15.1",
        description: "The Arduino UNO R4 WiFi merges the RA4M1 microprocessor from Renesas with the ESP32-S3 from Espressif.",
        specs: [
            { label: "Microcontroller", value: "Renesas RA4M1 (Arm Cortex-M4)" },
            { label: "WiFi/BLE", value: "ESP32-S3-MINI-1" },
            { label: "Input Voltage", value: "6-24V" }
        ]
    },
    {
        id: 6,
        name: "STM32F401 Black Pill",
        price: 6.20,
        category: "Microcontrollers",
        image: "data:image/jpeg;base64,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",
        description: "Low-cost development board based on the STM32F401CCU6 microcontroller.",
        specs: [
            { label: "Core", value: "Arm Cortex-M4F" },
            { label: "Flash", value: "256 KB" },
            { label: "Clock", value: "84 MHz" }
        ]
    },
    {
        id: 7,
        name: "Soldering Station KS-936",
        price: 45.00,
        category: "Tools",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCAPvDpZeDW6HjCradC7msv1mxMQHokbE7s1Mp5VPUiVOIa1A8lGoQboYbF7Eg",
        description: "ESD safe adjustable temperature soldering station for precision electronics work.",
        specs: [
            { label: "Power", value: "60W" },
            { label: "Temp Range", value: "200°C - 480°C" },
            { label: "Voltage", value: "24V AC Output" }
        ]
    },
    {
        id: 8,
        name: "HC-SR04 Ultrasonic Sensor",
        price: 2.99,
        category: "Sensors",
        image: "https://ts3.mm.bing.net/th?id=OIP.J8kF8DjgFh24UUKD8S69swHaHa&pid=15.1",
        description: "Provides 2cm - 400cm non-contact measurement function, the ranging accuracy can reach to 3mm.",
        specs: [
            { label: "Voltage", value: "DC 5V" },
            { label: "Current", value: "15mA" },
            { label: "Frequency", value: "40Hz" }
        ]
    },
    {
        id: 10,
        name: "LM2596 DC-DC Buck Converter",
        price: 1.95,
        category: "Power Supplies",
        image: "https://ts1.mm.bing.net/th?id=OIP.LRXPS0UheQbv_t1wtzwuGAHaHa&pid=15.1",
        description: "Step-down power module with adjustable output voltage.",
        specs: [
            { label: "Input", value: "4V - 35V" },
            { label: "Output", value: "1.23V - 30V" },
            { label: "Efficiency", value: "Up to 92%" }
        ]
    }
];
