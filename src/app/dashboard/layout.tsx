import AuthNavbar from '@/components/nav/AuthNavbar'

export default function DashboardLayout({ children }: any) {
    
    return (
        <>
            <AuthNavbar />
            {children}
        </>
    )
}