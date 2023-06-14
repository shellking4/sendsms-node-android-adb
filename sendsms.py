import subprocess
import re

regex = r'[.*+?^${}()|[\]\\\' ]'
message = "My friend's tongue says:  I love you !!!!!+++++"

escaped_str = re.sub(regex, r'\\\g<0>', message)

command = 'sendsms'
args = ['-n', '123456789', '-b', escaped_str]

sendsms = subprocess.Popen([command] + args, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

# Event listeners for stdout and stderr
stdout, stderr = sendsms.communicate()
print(f"stdout: {stdout.decode()}")
print(f"stderr: {stderr.decode()}")

# Event listener for process exit
exit_code = sendsms.returncode
print(f"child process exited with code {exit_code}")