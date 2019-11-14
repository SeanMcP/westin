export default function getHost() {
    const { REACT_APP_HOST: HOST, REACT_APP_PROTOCOL: PROTOCOL } = process.env
    return `${PROTOCOL}://${HOST}`
}

export function getServer() {
    const { REACT_APP_SERVER_PORT: PORT } = process.env
    return `${getHost()}:${PORT}`
}