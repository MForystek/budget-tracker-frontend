import {useEffect, useState} from "react";
import {actuatorApi} from "../services/api.ts";

export default function useHealthCheck(intervalSeconds: number) {
    const [isHealthy, setIsHealthy] = useState<boolean | null>(null);
    const [lastChecked, setLastChecked] = useState<Date | null>(null);

    useEffect(() => {
        const checkHealth = async () => {
            try {
                const response = await actuatorApi.get("/health")
                setIsHealthy(response.status === 200);
            } catch (err) {
                console.log("Health check failed: ", err);
                setIsHealthy(false);
            } finally {
                setLastChecked(new Date());
            }
        };
        checkHealth();

        const interval = setInterval(checkHealth, intervalSeconds * 1000);

        // Stop checking when component unmounts
        return () => clearInterval(interval);
    }, [intervalSeconds]);

    return { isHealthy, lastChecked };
}