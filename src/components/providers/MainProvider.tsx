import AuthProvider from '@/components/providers/AuthProvider'
import ThemeProvider from '@/components/providers/ThemeProvider'
import QueryProvider from '@/components/providers/QueryProvider'

export default function MainProvider({ children }: any) {
    return (
        <AuthProvider>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                <QueryProvider>
                    {children}
                </QueryProvider>
            </ThemeProvider>
        </AuthProvider>
    )
}