import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../gql/graphql";

type UserState = {
	id: string | undefined;
	email: string | undefined;
	setUser: (user: User) => void;
	clearUser: () => void;
};

export const useUserStore = create<UserState>()(
	persist(
		(set): UserState => ({
			id: undefined,
			email: undefined,
			setUser: (user: User) =>
				set({ id: user.id || undefined, email: user.email }),
			clearUser: () => set({ id: undefined, email: undefined }),
		}),
		{
			name: "user-storage",
		}
	)
);
