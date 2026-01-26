type Food = {
  _id: string;
  name: string;
  price: number;
  image?: string;
};

async function getFoods(): Promise<Food[]> {
  try {
    const res = await fetch("http://localhost:5000/api/foods", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch foods");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching foods:", error);
    return [];
  }
}

export default async function MenuPage() {
  const foods = await getFoods();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">🍽 Menu</h1>

      {foods.length === 0 ? (
        <p className="text-red-500">All Food available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {foods.map((food) => (
            <div
              key={food._id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={"/rice.jpg"}
                alt={food.name}
                className="h-40 w-full object-cover rounded"
              />

              {/* ✅ FOOD NAME */}
              <h2 className="text-xl font-semibold mt-3">
                {food.name}
              </h2>

              {/* ✅ FOOD PRICE */}
              <p className="text-green-600 font-bold">
                Rs {food.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
