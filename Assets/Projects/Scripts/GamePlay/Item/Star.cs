using DG.Tweening;
using Projects.Scripts.UIController;
using ThirdParties.Truongtv.SoundManager;
using TMPro;
using UnityEngine;

namespace Projects.Scripts.GamePlay.Item
{
    public class Star : MonoBehaviour
    {
        [SerializeField] private GameObject icon, effect;
        public Collider2D collider;
        private void Start()
        {
            collider = GetComponent<Collider2D>();
        }

        private void OnTriggerEnter2D(Collider2D other)
        {
            TriggerEnter(other);
        }
        public void TriggerEnter(Collider2D collider2D)
        {
            if (collider2D.gameObject.layer == 9)
            {
                return;
            }
            collider.enabled = false;
            OnCollect();
        }
        
        private void OnCollect()
        {
            GamePlayController.Instance.CollectStar(icon.transform);
            effect.transform.position = icon.transform.position;
            effect.SetActive(true);
            icon.SetActive(false);
        }

        public void OnCollide(Collision2D other)
        {
            if (other.gameObject.layer != 9 && other.transform.CompareTag("Player"))
            {
                collider.enabled = false;
                OnCollect();
            }
        }
    }
}