export type ApiResponse<Entity> = Promise<{
  isError: boolean;
  data?: Entity;
  response: Response;
}>;
