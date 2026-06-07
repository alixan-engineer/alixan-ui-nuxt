export const textSizeCode = `@theme {
  --text-md: 15px;
}`;
export const islandCode = `@utility island {
  @apply flex flex-col border overflow-hidden dark:bg-card dark:text-card-foreground min-h-fit;

  border-radius: clamp(var(--radius-md), 4%, var(--radius-xl));
}`;
export const backdropCode = `@utility backdrop {
  @apply fixed inset-0 bg-black/30 dark:bg-black/80;
}`;
