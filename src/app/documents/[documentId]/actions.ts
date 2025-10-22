"use server"

import { ConvexHttpClient } from "convex/browser";
import { auth, clerkClient } from "@clerk/nextjs/server";

import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function getDocuments(ids: Id<"documents">[]) {
    return await convex.query(api.documents.getByIds, { ids })
};

export async function getUsers() {
    const { sessionClaims } = await auth();
    const clerk = await clerkClient();

    // OrgId extraction – yeh sab possible keys cover karta hai (route.ts se copy)
    const orgId =
        (sessionClaims as { o?: { id?: string }; organization_id?: string; org_id?: string; orgId?: string })?.o?.id ||
        (sessionClaims as { organization_id?: string; org_id?: string; orgId?: string })?.organization_id ||
        (sessionClaims as { organization_id?: string; org_id?: string; orgId?: string })?.org_id ||
        (sessionClaims as { organization_id?: string; org_id?: string; orgId?: string })?.orgId;

    if (!orgId) {
        console.warn('No orgId found – returning empty users');
        return [];  // Agar org nahi mila, empty return
    }

    try {
        const response = await clerk.users.getUserList({
            organizationId: [orgId],  // Ab sahi orgId pass hoga
        });
        const users = response.data.map((user) => ({
            id: user.id,
            name: user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
            avatar: user.imageUrl,
            color: "",
        }));
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);  // Error log for troubleshooting
        return [];
    }
}