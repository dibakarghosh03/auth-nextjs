"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCurrentRole } from "@/hooks/use-current-role"; // for client components
import { currentRole } from "@/lib/auth"; // for server components
import { UserRole } from "@prisma/client";
import { useTransition } from "react";
import { toast } from "sonner";

const AdminPage =  () => {
    const [isPending, startTransition] = useTransition();

    const onServerActionClick = () => {
        startTransition(() => {
            admin()
                .then((data) => {
                    if(data?.error) toast.error(data?.error);
                    if(data?.success) toast.success(data?.success);
                });
        });
    };
    const onApiRouteClick = () => {
        startTransition(() => {
            fetch("/api/admin")
                .then((res) => {
                    if(res.ok) {
                        toast.success("SUCCESS");
                    } else{
                        toast.error("Forbidden API Route");
                    }
                });
        });
        
    };
    return ( 
        <Card className="w-[600px]">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">
                    Admin
                </p>
            </CardHeader>
            <CardContent className="space-y-4">
                <RoleGate allowedRole={UserRole.ADMIN} >
                    <FormSuccess message="You are allowed to use this content!" />
                </RoleGate>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                    <p className="font-medium text-sm">
                        Admin-only API Route
                    </p>
                    <Button onClick={onApiRouteClick}>
                        Click to test
                    </Button>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                    <p className="font-medium text-sm">
                        Admin-only Server Action
                    </p>
                    <Button 
                        onClick={onServerActionClick}
                        disabled={isPending}
                    >
                        Click to test
                    </Button>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default AdminPage;