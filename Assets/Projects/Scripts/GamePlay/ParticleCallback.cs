using UnityEngine;
using UnityEngine.Events;

namespace Projects.Scripts.GamePlay
{
    public class ParticleCallback : MonoBehaviour
    {
        [SerializeField] private UnityEvent completeEvent;
        public void OnParticleSystemStopped()
        {
            completeEvent.Invoke();
        }
    }
}