"use client";
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, TextField, Separator } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email,
            password,
        });

        if (res) {
            toast.success('Login Successful!');
            redirect('/destinations');
        }
        if (error) {
            toast.error(`${error.message}`);
        }

    }
    const handleContinueGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className="max-w-7xl mx-auto my-20 space-y-10">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Welcome Back</h1>
                <p>Resume your adventure with Wanderlust</p>
            </div>
            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="password"
                    type="password"
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                </TextField>
                <div className="flex gap-2">
                    <Button className={'rounded-none w-full bg-cyan-500'} type="submit">
                        Login
                    </Button>
                </div>
            </Form>
            <div className="flex items-center w-full my-4">
                <Separator className="flex-1" />
                <span className="px-3 text-sm text-gray-500 whitespace-nowrap">
                    Or continue with
                </span>
                <Separator className="flex-1" />
            </div>
            <Button onClick={handleContinueGoogle} className={'rounded-none w-full bg-cyan-500'} type="submit">
                <FcGoogle></FcGoogle> Continue with Google
            </Button>
        </div>
    );
}

export default SignInPage;