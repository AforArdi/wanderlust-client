"use client";
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const { name, imageUrl, email, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name,
            image: imageUrl,
            email,
            password,
        });

        if (res) {
            toast.success('Account Created Successfully!');
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
                <h1 className="text-4xl font-bold">Create Account</h1>
                <p>Start your adventure with Wanderlust</p>
            </div>
            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="name"
                    type="text"
                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                </TextField>

                <TextField
                    isRequired
                    name="imageUrl"
                    type="url"
                >
                    <Label>Image URL</Label>
                    <Input placeholder="Enter your image url" />
                </TextField>

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
                        Sign up
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

export default SignUpPage;