export default function PrivacyPolicy() {
    return (<>
        <div style={styles.container}>
            <h1 style={{
                fontSize: '2.5em',
                marginBottom: '20px',
                color: '#333',
                textAlign: 'center',
            }}>How to Delete Your Account</h1>

            <h2 style={styles.subHeader}>Steps to Delete Your Account</h2>
            <ol style={styles.list}>
                <li style={styles.listItem}>Login with your email and password.</li>
                <li style={styles.listItem}>Go to your profile page.</li>
                <li style={styles.listItem}>Navigate to settings.</li>
                <li style={styles.listItem}>Click on "Delete Account".</li>
            </ol>

            <p style={styles.paragraph}>Alternatively, you can contact us to delete your account using our contact details:</p>
            <ul style={styles.list}>
                <li style={styles.listItem}>Email: <a href="mailto:support@hayyataw.com"
                                                      style={styles.link}>support@hayyataw.com</a></li>
                <li style={styles.listItem}>Phone: +21699735853, +21698569410</li>
                <li style={styles.listItem}>
                    Address:
                    <br/>Yassine Bebba
                    <br/>Doualy Gafsa
                    <br/>Al Afran Primary School
                    <br/>Gafsa, 2143
                    <br/>Tunisia
                </li>
            </ul>
        </div>
    </>);
}

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1.6,
    },
    header: {
        fontSize: '2.5em',
        marginBottom: '20px',
        color: '#333',
        textAlign: 'center',
    },
    subHeader: {
        fontSize: '1.8em',
        marginBottom: '15px',
        color: '#666',
    },
    list: {
        marginLeft: '20px',
        marginBottom: '20px',
    },
    listItem: {
        marginBottom: '10px',
    },
    paragraph: {
        marginBottom: '20px',
    },
    link: {
        color: '#0073e6',
        textDecoration: 'none',
    },
};