import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/0903_react/", // {repo-name}을 GitHub 저장소 이름으로 변경
});
