using TMPro;
using UnityEngine;

namespace Projects.Scripts.GamePlay.Building
{
    public class StartLevel : MonoBehaviour
    {
        [SerializeField] private CheckPoint checkPoint;
        [SerializeField] private TextMeshProUGUI levelText;
        private static StartLevel _instance;
        public static StartLevel Instance => _instance;

        private void Awake()
        {
            if (_instance != null)
            {
                Destroy(_instance.gameObject);
            }

            _instance = this;
        }

        public CheckPoint Init(string level)
        {
            //levelText.text = level;
            return checkPoint;
        }
    }
}