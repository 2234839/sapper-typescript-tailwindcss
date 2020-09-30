module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    /** 扩展原来的配置，冲突了的以扩展的为准，如果直接写在theme里面会覆盖导致没有默认配置 */
    extend: {
      colors: {
        /** 黑色，重色 顶栏 */ dark: "#1b1b1b",
        /** 背景色 */ bg: "rgba(237, 237, 237)",
        /** 背景色 245 浅灰 */ 245: "rgba(245, 245, 245)",
        /** 警告浅色 */ "warning-light": "#ffe8ea",
        /** 警告 重色 */ "warning-heavy": "#f5222d",
        /** 字 黑色 基础色 */ black: "#333",
        /** 字 灰色 */ gray9: "#999",
        /** 字 灰色 666 */ gray6: "#666",
        /** fff 最白色 */ fff: "#fff",
      },
      height: {
        sm: "14px",
        md: "16px",
        lg: "24px",
        xl: "48px",
      },
      /** 自定义间距 最高 100 px  */
      spacing: (() => {
        const spacing = {};
        for (let i = 0; i < 101; i++) {
          spacing[i] = `${i}px`;
        }
        return spacing;
      })(),
      /** 字体大小 */
      fontSize: (() => {
        const size = {};
        for (let i = 0; i < 50; i++) {
          size[i] = `${i}px`;
        }
        Object.assign(size, {
          sm: "14px",
          base: "16px",
          lg: "24px",
          xl: "48px",
        });
        return size;
      })(),
      /** 字体间距 */
      letterSpacing: (() => {
        const spacing = {};
        for (let i = 0; i < 30; i++) {
          spacing[i] = `${i}px`;
        }
        return spacing;
      })(),
    },
  },
};
