import axios from 'axios';

export const fetchGlobalStats = async () => {
    try {
        const response = await axios.get(`https://api.coinlore.net/api/global/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
};

export const fetchCryptos  = async (start = 0, limit = 50) => {
    try {
        const response = await axios.get(`https://api.coinlore.net/api/tickers/?start=${start}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
};

export const fetchCoinDetails   = async (start = 0, limit = 50) => {
    try {
        const response = await axios.get(`https://api.coinlore.net/api/tickers/?start=${start}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
};

