import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../api/axiosInstance";
import FormInput from "../components/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles } from "../store/actions/clientActions";

function SignupPage() {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm({ mode: "onChange", shouldUnregister: true });

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const roles = useSelector((state) => state.client.roles);

    useEffect(() => {
        dispatch(fetchRoles());
    }, [dispatch]);

    useEffect(() => {
        if (roles.length > 0) {
            const customer = roles.find((r) => r.code === "customer");
            if (customer) setValue("role_id", String(customer.id));
        }
    }, [roles, setValue]);


    const selectedRoleId = watch("role_id");
    const storeRole = roles.find((r) => r.code === "store");
    const isStore = storeRole && String(selectedRoleId) === String(storeRole.id);
    const password = watch("password");

    const onSubmit = (data) => {
        const payload = {
            name: data.name,
            email: data.email,
            password: data.password,
            role_id: Number(data.role_id),
        };
        if (data.store) {
            payload.store = {
                name: data.store.name,
                phone: data.store.phone,
                tax_no: data.store.tax_no,
                bank_account: data.store.bank_account,
            };
        }

        return axiosInstance
            .post("/signup", payload)
            .then(() => {
                toast.warning("You need to click link in email to activate your account!");
                navigate(-1);
            })
            .catch((error) => {
                toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
            });
    };

    return (
    <div className="mx-auto max-w-lg px-6 py-12">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#252B42]">Sign Up</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <FormInput
            label="Name" name="name" register={register} error={errors.name}
            rules={{
            required: "Name is required",
            minLength: { value: 3, message: "Name must be at least 3 characters" },
            }}
        />

        <FormInput
            label="Email" name="email" type="email" register={register} error={errors.email}
            rules={{
            required: "Email is required",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
            }}
        />

        <FormInput
            label="Password" name="password" type="password" register={register} error={errors.password}
            rules={{
            required: "Password is required",
            minLength: { value: 8, message: "Password must be at least 8 characters" },
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])/,
                message: "Must include upper, lower, number and special char",
            },
            }}
        />

        <FormInput
            label="Confirm Password" name="confirmPassword" type="password" register={register} error={errors.confirmPassword}
            rules={{
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
            }}
        />

        {/* Role select (input değil, ayrı kalıyor) */}
        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-[#252B42]">Role</label>
            <select
            className="rounded border border-[#DDDDDD] bg-white px-4 py-3 text-sm outline-none focus:border-[#23A6F0]"
            {...register("role_id", { required: "Role is required" })}
            >
            {roles.map((role) => (
                <option key={role.id} value={role.id}>{role.name}</option>
            ))}
            </select>
            {errors.role_id && <span className="text-xs text-red-500">{errors.role_id.message}</span>}
        </div>

        {/* Store alanları */}
        {isStore && (
            <div className="flex flex-col gap-5 rounded border border-[#ECECEC] p-4">
            <h3 className="text-sm font-bold text-[#252B42]">Store Information</h3>

            <FormInput
                label="Store Name" name="store.name" register={register} error={errors.store?.name}
                rules={{
                required: "Store name is required",
                minLength: { value: 3, message: "Store name must be at least 3 characters" },
                }}
            />
            <FormInput
                label="Store Phone" name="store.phone" type="tel" register={register} error={errors.store?.phone}
                rules={{
                required: "Store phone is required",
                pattern: { value: /^(\+90|0)?5\d{9}$/, message: "Enter a valid Türkiye phone number" },
                }}
            />
            <FormInput
                label="Store Tax ID" name="store.tax_no" placeholder="TXXXXVXXXXXX" register={register} error={errors.store?.tax_no}
                rules={{
                required: "Tax ID is required",
                pattern: { value: /^T\d{4}V\d{6}$/, message: "Pattern must be TXXXXVXXXXXX" },
                }}
            />
            <FormInput
                label="Store Bank Account (IBAN)" name="store.bank_account" placeholder="TR..." register={register} error={errors.store?.bank_account}
                rules={{
                required: "IBAN is required",
                pattern: { value: /^TR\d{24}$/, message: "Enter a valid IBAN (TR + 24 digits)" },
                }}
            />
            </div>
        )}

        <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 flex items-center justify-center gap-2 rounded bg-[#23A6F0] px-6 py-3 font-bold text-white transition hover:bg-[#1a8fd1] disabled:opacity-60"
        >
            {isSubmitting && (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            )}
            {isSubmitting ? "Signing up..." : "Sign Up"}
        </button>
        </form>
    </div>
    );
}

export default SignupPage;