import { Card } from '@/components/ui/card';

export default function Loading() {
  return (
    <Card className="min-h-[400px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-muted-foreground animate-pulse">Loading...</p>
      </div>
    </Card>
  );
}
