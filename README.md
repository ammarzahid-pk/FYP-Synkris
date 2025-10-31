# FYP-Synkris — Collaborative Document Editor

## 🧭 How to Run the Project (Simple Steps)

### 1️⃣ Clone the Repository

Open **CMD** or **Git Bash**, then run:

```bash
git clone https://github.com/ammarzahid-pk/FYP-Synkris.git
cd FYP-Synkris
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env.local`

After creating this file, **contact Ammar** for the correct values — this file contains secret keys and should not be shared publicly.

```env
NEXT_PUBLIC_CONVEX_URL=https://your-convex-url.convex.cloud
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=pk_live_yourpublickey
```

### 4️⃣ Run the App

```bash
npm run dev
```

Now open [http://localhost:3000](http://localhost:3000) in your browser.

✅ The app will connect automatically to the shared Convex database and Liveblocks workspace.

---

## ⚙️ Commands You May Need

| Action                 | Command                                |
| ---------------------- | -------------------------------------- |
| Pull latest updates    | `git pull origin main`                 |
| Create a new branch    | `git checkout -b feature/branch-name`  |
| Switch branch          | `git checkout branch-name`             |
| Add and commit changes | `git add . && git commit -m "message"` |
| Push your branch       | `git push origin feature/branch-name`  |

---

## ❌ Common Issues

| Problem               | Fix                                                 |
| --------------------- | --------------------------------------------------- |
| App not starting      | Run `npm install` again                             |
| Env error             | Check `.env.local` values                           |
| Real-time not working | Make sure Convex URL and Liveblocks key are correct |

---

## ✅ Summary

1. Open CMD or Git Bash
2. Clone the repo
3. Run `npm install`
4. Create `.env.local` (get keys from Ammar)
5. Run `npm run dev`

That’s it! The project will run locally and connect to the same backend as everyone else.
