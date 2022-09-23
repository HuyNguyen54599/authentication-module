import { Avatar, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function RegisterForm(props) {
    return (
        <div>
            <Avatar>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h3" variant="h5">
                Create an Account
            </Typography>
            {/* <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <InputField name="password" label="Password" form={form} />
                <InputField name="retypePassword" label="Retype Password" form={form} />
            </form> */}
        </div>
    );
}

export default RegisterForm;
