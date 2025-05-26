export const Dashboard = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="max-w-4xl mx-auto w-full py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground mb-1">
            Welcome to your application dashboard. This is a boilerplate
            starting point.
          </p>
          <p className="text-sm text-muted-foreground">
            Replace this content with your actual application features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-6 bg-card rounded-lg border">
            <h3 className="font-semibold mb-2">Feature 1</h3>
            <p className="text-sm text-muted-foreground">
              Add your first feature here
            </p>
          </div>

          <div className="p-6 bg-card rounded-lg border">
            <h3 className="font-semibold mb-2">Feature 2</h3>
            <p className="text-sm text-muted-foreground">
              Add your second feature here
            </p>
          </div>

          <div className="p-6 bg-card rounded-lg border">
            <h3 className="font-semibold mb-2">Feature 3</h3>
            <p className="text-sm text-muted-foreground">
              Add your third feature here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
