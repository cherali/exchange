import { useContext } from 'react'
import { SocketContextProps } from './index.d'
import { SocketContext } from './SocketProviderContext'


const useSocket = (): SocketContextProps => useContext(SocketContext)

export default useSocket