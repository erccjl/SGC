namespace SGC.Domain.Contrators
{
    public interface IUnitOfWork : IDisposable
    {
        void Save();

        void RollbackChanges();

    }
}
